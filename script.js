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

        switch (btnValue) {
            case "add":
                console.log("addition")
                setFirstValue(displayValue);
                displayValue = "";
                document.querySelector("#display").textContent = "";
                selectedOp = "+";
                break;
            case "equals":
                setSecondValue(displayValue);
                if(firstNumber != "" && secondNumber != ""){
                    operate(firstNumber, secondNumber, selectedOp)
                }
                break;
            case "clear":
                displayValue = "";
                firstNumber = "";
                secondNumber = "";
                selectedOp = "";
                update()
                break;
            case "subtract":
                setFirstValue(displayValue);
                displayValue = "";
                document.querySelector("#display").textContent = "";
                selectedOp = "-";
                break;
            case "multiply":
                setFirstValue(displayValue);
                displayValue = "";
                document.querySelector("#display").textContent = "";
                selectedOp = "*";
                break;
            case "divide":
                setFirstValue(displayValue);
                displayValue = "";
                document.querySelector("#display").textContent = "";
                selectedOp = "/";
                break;
            default:
                displayValue += btnValue;
                update()
                break;
        }
    });
});


function operate(firs, secon, op) {
    let first = parseInt(firs);
    let second = parseInt(secon)
    let sum = 0;
    console.log(op)
    switch (op) {
        case "+":
            console.log("case addiion")
            sum = add(first, second);
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
    firstNumber = "";
    secondNumber = "";
    update()
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function divide(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y;
}

function setFirstValue(number) {
    firstNumber = number;
}

function setSecondValue(number) {
    secondNumber = number
}

function update() {
    document.querySelector("#display").textContent = displayValue;
}
