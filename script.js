const display = document.getElementById('display');
let isCalculated = false;

function clearDisplay() {
    display.innerText = '0';
    isCalculated = false;
}

function backspace() {
    if (isCalculated) {
        clearDisplay();
    } else {
        display.innerText = display.innerText.slice(0, -1) || '0';
    }
}

function appendCharacter(character) {
    if (isCalculated) {
        display.innerText = '0';
        isCalculated = false;
    }
    if (display.innerText === '0' && character !== '.') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
        isCalculated = true;
    } catch (error) {
        display.innerText = 'Error';
        isCalculated = true;
    }
}
