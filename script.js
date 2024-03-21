let firstNumber;
let secondNumber;
let operationToDo;


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
            add(firstNum, secondNum);
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