function displayErrorMessage(message) {
    const display = document.getElementById('display');
    display.value = message;

    setTimeout(() => {
      display.value = '';
    }, 2000);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        dispalyErrorMessage("Cannot divide by Zero!");
        return;
    }
    return a / b;
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b)    
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            displayErrorMessage("Invalid operator");
            return null;
    }
}

