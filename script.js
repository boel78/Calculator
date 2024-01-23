var firstNumber;
var operator;
var secondNumber;
let displayValue = "";

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let btnValue = btn.getAttribute('id');
        console.log(btnValue);
        if(Number.isInteger(parseInt(btnValue))){
            displayValue += btnValue;
            document.querySelector("#display").textContent = displayValue;
        }
    });
});


function operate(first, second, op){
    switch(op){
        case "+":
            add(first, second);
        break;
        case "-":
            subtract(first, second);
        break;
        case "*":
            multiply(first, second);
        break;
        case "/":
            divide(first, second);
        break;
    }
}

function add(x, y){
    return x+y;
}

function subtract(x, y){
    return x-y;
}

function divide(x, y){
    return x/y;
}

function multiply(x, y){
    return x*y;
}
