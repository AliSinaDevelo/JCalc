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
        displayErrorMessage("Cannot divide by Zero!");
        return;
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            displayErrorMessage("Invalid operator");
            return null;
    }
}

let displayValue = '';

function updateDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

let firstNumber = null;
let operator = null;


document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        updateDisplay(button.textContent);
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(displayValue);
            operator = button.textContent;
            clearDisplay();
        } else {
            const secondNumber = parseFloat(displayValue);
            const result = operate(operator, firstNumber, secondNumber);
            if (result !== null) {
                firstNumber = result;
                operator = button.textContent;
                document.getElementById('display').value = result;
            }
            clearDisplay();
        }
    });
});

document.getElementById('equals').addEventListener('click', () => {
    if (firstNumber !== null && operator !== null) {
        const secondNumber = parseFloat(displayValue);
        const result = operate(operator, firstNumber, secondNumber);
        if (result !== null) {
            document.getElementById('display').value = result;
            firstNumber = result;
            operator = null;
        }
    }
});

document.getElementById('clear').addEventListener('click', () => {
    firstNumber = null;
    operator = null;
    clearDisplay();
});


function displayErrorMessage(message) {
    document.getElementById('display').value = message;
    setTimeout(clearDisplay, 2000);
}
