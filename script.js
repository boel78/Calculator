var firstNumber;
var operator;
var secondNumber;
let displayValue = "";
let selectedOp = "";

const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        let btnValue = btn.getAttribute('id');
        console.log(btnValue);
        if(Number.isInteger(parseInt(btnValue))){
            displayValue += btnValue;
            update()
        }
        else if(btnValue == "add"){
            console.log("addition")
            setFirstValue(displayValue);
            displayValue = "";
            document.querySelector("#display").textContent = "";
            selectedOp = "+";
        }
        else if(btnValue == "equals"){
            setSecondValue(displayValue);
            operate(firstNumber, secondNumber, selectedOp)
        }
        else if(btnValue == "clear"){
            displayValue = "";
            firstNumber = "";
            secondNumber = "";
            selectedOp = "";
            update()
        }
    });
});


function operate(firs, secon, op){
    let first = parseInt(firs);
    let second = parseInt(secon)
    let sum = 0;
    console.log(op)
    switch(op){
        case "+":
            console.log("case addiion")
            sum =add(first, second);
        break;
        case "-":
            sum = subtract(first, second);
        break;
        case "*":
            sum = multiply(first, second);
        break;
        case "/":
            sum = divide(first, second);
        break;
        
    }
    console.log(sum)
    displayValue = sum;
    update()
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

function setFirstValue(number){
    firstNumber = number;
}

function setSecondValue(number){
    secondNumber = number
}

function update(){
    document.querySelector("#display").textContent = displayValue;
}
