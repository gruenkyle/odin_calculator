function add(a, b) {
    return (a + b)
};

function subtract(a, b) {
    return (a - b);
};

function multiply(a, b) {
    return (a * b);
};

function divide(a, b) {
    return (a / b);
};

function operate(a, operator, b) {
    if (operator == '+') {
        return add(a, b);
    }
    else if (operator == '-') {
        return subtract(a, b);
    }
    else if (operator == '*') {
        return multiply(a, b);
    }
    else if (operator == '/') {
        return divide(a, b);
    }
    else {
        return "Not Working";
    }
};

let currentValue = '';
let previousValue = '';
let operator = '';

const numbers = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const inputBar = document.querySelector(".input-text");
const equal = document.querySelector(".equals");
const clear = document.querySelector(".clear");

numbers.forEach((number) => number.addEventListener("click", function (e) {
    handleNumber(e.target.value);
    inputBar.textContent = currentValue;
}));

operators.forEach((op) => op.addEventListener("click", function (e) {
    handleOperator(e.target.value);
    inputBar.textContent = (`${previousValue} ${e.target.value} ${currentValue}`);

}));

function handleNumber(num) {
    currentValue += num;
    console.log(num);
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';

    console.log(op);
}

clear.addEventListener("click", function(){
    previousValue = '';
    currentValue = '';
    operator = ''; 
    inputBar.textContent = ''; 
});

equal.addEventListener("click", function(){
    let finalAnswer = operate(previousValue, operator, currentValue);
    inputBar.textContent = (`${finalAnswer}`); 
});



