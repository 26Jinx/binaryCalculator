'use strict'

// display digits to res window
function displayObj(str) {
    let calcWindow = document.getElementById('res');
    calcWindow.innerHTML = str;
}

// create object to display
function makeDisplayObj(obj) {

    if (obj === 'clr') {
        strToDisplay = '';
        calculationObj = {
            'numbers': [],
            'operator': null,
            'result': null
        };

        console.log(calculationObj);

        return displayObj(strToDisplay);

    } else if (obj === 'equals') {
        strToDisplay = calculate();
    } else if (strToDisplay) {
        strToDisplay += obj.toString();
    } else {
        strToDisplay = obj.toString();
    }

    return displayObj(strToDisplay);
}

function convertAndStore(str) {
    // split the display string into two numbers and an operator
    let parsedStrArr = str.split(calculationObj.operator);

    // convert binary numbers into decimal
    calculationObj.numbers[0] = parseInt(parsedStrArr[0], 2);
    calculationObj.numbers[1] = parseInt(parsedStrArr[1], 2);
}

function calculate() {
    switch (calculationObj.operator) {
        case '+':
            calculationObj.result = calculationObj.numbers[0] + calculationObj.numbers[1]
            break;
        case '-':
            calculationObj.result = calculationObj.numbers[0] - calculationObj.numbers[1]
            break;
        case '*':
            calculationObj.result = calculationObj.numbers[0] * calculationObj.numbers[1]
            break;
        case '/':
            calculationObj.result = calculationObj.numbers[0] / calculationObj.numbers[1]
            break;
    }
    console.log(calculationObj);

    // convert result int to binary and pass it to makeDisplayObj function
    return (calculationObj.result >>> 0).toString(2);
}

let strToDisplay = '';
let calculationObj = {'numbers': [],
    'operator': null,
    'result': null};

const btn0 = document.getElementById('btn0');
btn0.addEventListener('click', () => {
    makeDisplayObj(btn0.innerHTML);
}, false)

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    makeDisplayObj(btn1.innerHTML);
}, false);

const btnSum = document.getElementById('btnSum');
btnSum.addEventListener('click', () => {
    makeDisplayObj(btnSum.innerHTML);
    calculationObj.operator = btnSum.innerHTML;
}, false);

const btnSub = document.getElementById('btnSub');
btnSub.addEventListener('click', () => {
    makeDisplayObj(btnSub.innerHTML);
    calculationObj.operator = btnSub.innerHTML;
}, false)

const btnMul = document.getElementById('btnMul');
btnMul.addEventListener('click', () => {
    makeDisplayObj(btnMul.innerHTML);
    calculationObj.operator = btnMul.innerHTML;
}, false)

const btnDiv = document.getElementById('btnDiv');
btnDiv.addEventListener('click', () => {
    makeDisplayObj(btnDiv.innerHTML);
    calculationObj.operator = btnDiv.innerHTML;
}, false);

const btnClr = document.getElementById('btnClr');
btnClr.addEventListener('click', () => {
    makeDisplayObj('clr');
}, false);

const btnEql = document.getElementById('btnEql');
btnEql.addEventListener('click', () => {
    convertAndStore(strToDisplay);

    if (calculationObj['numbers'].length === 2) {
        makeDisplayObj('equals');
    } else {
        console.log('incomplete calculationObj');
    }

})



