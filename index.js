
// import datas from './dome.js'
// console.log(datas)


data.map((item, index) => {
    let nav = document.createElement('nav')
    nav.setAttribute('index', index)
    let nava = document.createElement('h4')
    nava.innerHTML = item.content.title
    nav.appendChild(nava)

    let navp = document.createElement('p')
    navp.innerHTML = item.content.summary
    nav.appendChild(navp)

    let aside = document.querySelector('aside')
    aside.appendChild(nav)

    let content = document.createElement('div')
    content.setAttribute('index', index)
    content.setAttribute('class', 'container')
    let eleh3 = document.createElement('h3')
    eleh3.innerHTML = item.content.title
    let eleTime = document.createElement('time')
    eleTime.innerHTML = item.content.modifyDate
    let elep = document.createElement('p')
    elep.innerHTML = item.content.summary
    let elediv = document.createElement('div')
    elediv.innerHTML = item.content.summarylink
    let eleul = document.createElement('ul')
    if (item.content.relate_stock.length) {
        item.content.relate_stock.map((elementOrValue, indexOrKey) => {
            let ele = document.createElement('li')
            ele.innerHTML = elementOrValue
            eleul.appendChild(ele)
        });

    }
    content.appendChild(eleh3)
    content.appendChild(eleTime)
    content.appendChild(eleul)
    content.appendChild(elep)
    content.appendChild(elediv)
    document.querySelector('main').appendChild(content)
})
let aside = document.querySelector('aside')
let main = document.querySelector('main')


let nav = document.getElementsByTagName('nav')
let contentDiv = document.getElementsByClassName('container')
for (var i = 0; i < nav.length; i++) {
    nav[i].index = i
    nav[i].onclick = function () {

        for (var j = 0; j < nav.length; j++) {
            nav[j].className = ''
        }
        for (var i = 0; i < contentDiv.length; i++) {
            contentDiv[i].style.display = 'none'
        }
        nav[this.index].className = 'active'

        contentDiv[this.index].style.display = 'block'
    }
}