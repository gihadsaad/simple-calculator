let number1=document.getElementById('number1');
let number2=document.getElementById('number2');
let result=document.getElementById('result');

function add(){
    let num1=Number(number1.value);
    let num2=Number(number2.value);
    let re=num1+num2;
    result.classList.remove("d-none")
    result.innerHTML=re;

}
function subtract(){
    let num1=Number(number1.value);
    let num2=Number(number2.value);
    let re=num1-num2;
    result.classList.remove("d-none")
    result.innerHTML=re;

}
function clearre(){
     number1.value="";
     number2.value="";
    result,innerHTML=''
    result.classList.add('d-none')
    

}