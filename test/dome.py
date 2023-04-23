import pandas as pd
import numpy as np
import tushare as ts

# 获取上证50成分股数据
stock_list = ts.get_sz50s()

# 设置初始资金为100万
capital = 1000000

# 设定买入/卖出的股票数量为每只股票总资金的20%
num_positions = int(capital * 0.2 / len(stock_list))

# 创建空的DataFrame存储每天的交易结果
trades = pd.DataFrame(index=stock_list['code'], columns=['position', 'price', 'value'])

for date in pd.date_range(start='2022-01-01', end='2022-12-31'):
    # 获取当日的股票价格
    prices = ts.get_realtime_quotes(stock_list['code'])[['code', 'open']].set_index('code').astype(float)

    # 计算涨跌幅
    pct_change = prices['open'].pct_change()

    # 根据涨跌幅决定买卖仓位
    for stock_code in stock_list['code']:
        if pct_change[stock_code] > 0:
            trades.loc[stock_code, 'position'] = num_positions
            trades.loc[stock_code, 'price'] = prices.loc[stock_code, 'open']
            trades.loc[stock_code, 'value'] = num_positions * prices.loc[stock_code, 'open']
        elif pct_change[stock_code] < 0:
            trades.loc[stock_code, 'position'] = -num_positions
            trades.loc[stock_code, 'price'] = prices.loc[stock_code, 'open']
            trades.loc[stock_code, 'value'] = -num_positions * prices.loc[stock_code, 'open']
        else:
            trades.loc[stock_code, 'position'] = 0
            trades.loc[stock_code, 'price'] = np.nan
            trades.loc[stock_code, 'value'] = 0

    # 计算当日的总资产
    total_value = trades['value'].sum() + capital

    # 更新下一次买卖时的可用资金
    capital = total_value - (trades['position'] * trades['price']).sum()

# 输出最终的总资产
print('Final capital:', total_value)
