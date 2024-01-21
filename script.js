let currentInput = '';
const display = document.getElementById('display');

function append(value) {
    if (value === '%') {
        currentInput = String(Number(currentInput) / 100);
    } else {
        currentInput += value;
    }
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function toggleSign() {
    if (currentInput !== '') {
        currentInput = String(Number(currentInput) * -1);
        display.value = currentInput;
    }
}

function calculate() {
    try {
        currentInput = String(eval(currentInput));
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

function clearEntry() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}


// Input keyboard
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case '0':
            append('0');
            break;
        case '1':
            append('1');
            break;
        case '2':
            append('2');
            break;
        case '3':
            append('3');
            break;
        case '4':
            append('4');
            break;
        case '5':
            append('5');
            break;
        case '6':
            append('6');
            break;
        case '7':
            append('7');
            break;
        case '8':
            append('8');
            break;
        case '9':
            append('9');
            break;
        case '+':
            append('+');
            break;
        case '-':
            append('-');
            break;
        case '*':
            append('*');
            break;
        case '/':
            append('/');
            break;
        case '.':
            append('.');
            break;
        case 'Enter':
            calculate();
            break;
        case 'Escape':
            clearDisplay();
            break;
        case 'Backspace':
            clearEntry();
            break;
    }
});