豫A6Y5TR
许利锋
411123199705052512

cy  sit  s@C#2$95Ob

吴晓刚:
cy  uat  S%C*#258xb

吴晓刚:
ta 官网：T@a#2$58sY

吴晓刚:
sn官网: S!N#24%i8H


tar -zcvf admin.tar.gz admin
__UNI__2DCF131.wgt

getQuickQuoteResult  返参增加 zhRiskFlag;//0:空值 1:交三 2:主全@牟文耀 
产品工厂增加方案配置维度如下：
  维度名称：险种组合；
  维度枚举值：空值、交三、主全；
同时，前端出单系统增加联动校验规则如下：
  1、如未勾选车损险，不展示“主全”属性的联动方案；
  2、如勾选车损险，不展示“交三”属性的联动方案；
  3、如联动方案的险种组合为空值，不校验是否勾选车损险； 


register：新增参数uuid
modifyPassword:新增参数newPsdUuid newSePsdUuid
changePassword:新增参数oldPsdUuid newPsdUuid newSePsdUuid


<view v-if="i.coverageCode=='0'&&i.calculateFlag=='0'&& item.zhRiskFlag!='2'">
                                                    <view class="risk-mp-text">
                                                        {{item.productName}}
                                                    </view>
                                                    <radio 
                                                        class="risk-mp-radio" 
                                                        :value="item.productCode" 
                                                        :checked="item.isDefault == '1'"
                                                    />
                                                </view>
                                                <view v-if="i.coverageCode=='0'&&i.calculateFlag=='1'&&item.zhRiskFlag!='1'">
                                                    <view class="risk-mp-text">
                                                        {{item.productName}}
                                                    </view>
                                                    <radio 
                                                        class="risk-mp-radio" 
                                                        :value="item.productCode" 
                                                        :checked="item.isDefault == '1'"
                                                    />
                                                </view>