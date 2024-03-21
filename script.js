let firstNumber = document.querySelectorAll(".number");
let secondNumber = document.querySelectorAll(".number");
let operationToDo = document.querySelectorAll(".operation");
let displayInput = document.querySelector(".calc-display");

let firstInput = '';
let storeOperate = '';
let fn='';
let sn='';
console.log("okay");
function add(firstNum, SecondNum) {
    return firstNum + SecondNum;
}

function subtract(firstNum, SecondNum) {
    return firstNum - SecondNum;
}

function divide(firstNum, SecondNum) {
    return firstNum / SecondNum;
}

function multiply(firstNum, SecondNum) {
    return firstNum * SecondNum;
}

function operate(firstNum, secondNum, operator){
    switch(operator) {
        case "+":
            display(add(firstNum, secondNum));
            break;
        case "-":
            subtract(firstNum, secondNum);
            break;
        case "/":
            divide(firstNum, secondNum);
            break;
        case "*":
            multiply(firstNum, secondNum);
            break;
    }
}

function display(inputs) {
    displayInput.innerText = inputs;
}

firstNumber.forEach((button) => {
    button.addEventListener("click", function () {
        firstInput += button.value;
        console.log(firstInput);
        display(firstInput);

    });
  });

operationToDo.forEach((button) => {
    button.addEventListener("click", function () {
        storeOperate = button.value;
        displayInput.innerText = '';
        fn = firstInput;
        firstInput = '';
    });
  });

document.querySelector('#equalsto').addEventListener("click", function() {
    operate(fn,firstInput, storeOperate);

});