const display = document.querySelector('#screen');
const number = document.querySelectorAll('.num');
const operator = document.querySelectorAll('.ope');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clr');


let num1 = '';
let num2 = '';
let result = null;
let sign = '';
let Dot = false;


// display the numbers
number.forEach( no => {
    no.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !Dot) {
            Dot = true;
        }else if(e.target.innerText === '.' && Dot) {
            return;
        }
        num2 += e.target.innerText;
        display.innerText = num2;
    })
});


// display the Operator
operator.forEach(arth => {
    arth.addEventListener('click', (e) =>{
        if(!num2) return;
        Dot = false;
        let operation = e.target.innerText;
        if(num1 && num2 && sign) {
            calculator();
        }else {
            result = Number(num2);
        }
        console.log(result);
        num1 += num2+ ' '+ operation+ ' ';
        display.innerText = num1;
        num2 = '';
        sign = operation;
    })
});


// Calculator function
function calculator() {
    switch(sign) {
        case '+':
            result = parseFloat(result) + parseFloat(num2);
            result.toFixed(4);
            break;
        case '-':
            result = parseFloat(result) - parseFloat(num2);
            result.toFixed(4);
            break;
        case '*':
            result = parseFloat(result) * parseFloat(num2);
            result.toFixed(4);
            break;
        case '/':
            if(parseFloat(num2) == 0) {
                result = "Denominator can not be 0";
            }else {
                result = parseFloat(result) / parseFloat(num2);
                result.toFixed(4);
            }
            break;
        case '%':
            if(parseFloat(num2) == 0) {
                result = "Denominator can not be 0";
            }else {
                result = parseFloat(result) % parseFloat(num2);
                result.toFixed(4);
            }
            break;
        case '**':
            result = parseFloat(result) ** parseFloat(num2);
            result.toFixed(4);
            break;
    }
}


// Equal function
equal.addEventListener('click', ()=> {
    calculator();
    display.innerText = result;
    num2 = result;
    num1 = '';
})


// Clear Function
clear.addEventListener('click', ()=>{
    num1 = '';
    num2 = '';
    display.innerText = '';
    result = '';
})