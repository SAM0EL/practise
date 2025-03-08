let AnotherMyName32165498498745641 = ['samoel', 'morad', 'mina', 'arsany', 'bishoy', 'shady']
let ages = ['31 years old', '66 years old', '21 years old', '25 years old', '28 years old', '20 years old']

let container163231465 = document.createElement("div")
document.body.appendChild(container163231465)
container163231465.style.cssText = `
    text-align: center;
`
function element(AnotherMyName32165498498745641, ages) {

    // element
    let card = document.createElement('div')
    let title = document.createElement('h1')
    let age = document.createElement('p')
    let img = document.createElement("img")

    // content
    let head = document.createTextNode(AnotherMyName32165498498745641)
    let agecontent = document.createTextNode(ages)
    img.src = "WhatsApp Image 2024-10-24 at 8.58.08 PM.jpeg"
    title.appendChild(head)
    age.appendChild(agecontent)

    // style
    card.style.display = 'inline-block';
    card.style.width = '200px';
    card.style.background = '#444';
    card.style.margin = '2px';
    card.style.padding = '10px';
    card.style.color = '#fff';
    img.style.width = "100%"
    container163231465.appendChild(card)
    card.appendChild(title)
    card.appendChild(age)
    card.appendChild(img)
}
for(let i=0; i<6 ;i++){
    element(AnotherMyName32165498498745641[i],ages[i])
}

//-----------------------------EVENT------------------------------//

let btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener('click',function () {
    btn.innerHTML= ("Hello From Js")
    console.log("Hello From Js");
    btn.style.background="red";
})

let i = 1;
btn.addEventListener('mouseover',function () {
    console.log("click"+i++);
})

let inp = document.getElementById("inp");

inp.addEventListener('focus',function(){
    inp.style.border= '20px solid red'
    inp.style.margin= '10px'
})

inp.addEventListener('blur',function(){
    inp.style.border= "2px solid #000"
})

onresize = function(){
    document.body.style.background = " #34421e"
    document.body.style.color = '#fff'
}

onload = function(){
    document.body.style.background = "#c19434"
}

let ConvertCurrency = document.getElementById('convert-currency')
let ConvertCurrencyH3 = document.getElementById('convert-currency').getElementsByTagName('h3')

ConvertCurrencyH3[0].style.margin = '5px 0px';
ConvertCurrency.style.margin = '15px 0px';

let dollar = document.getElementById('dollar')
let pound = document.getElementById('pound')

dollar.onkeyup = function () {
    pound.value = dollar.value * 51 ;
}

pound.addEventListener('keyup',function(){
    dollar.value = pound.value / 51 ;
})
