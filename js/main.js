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
        calculationObj = {'numbers': [],
            'operation': null,
            'result': null};

        console.log(calculationObj);

        return displayObj(strToDisplay);

    } else if (strToDisplay) {
        strToDisplay += obj.toString();
    } else {
        strToDisplay = obj.toString();
    }

    return displayObj(strToDisplay);
}

function convertAndStore(operator) {
    let convertedInt = parseInt(strToDisplay, 2);
    calculationObj.numbers.push(convertedInt);
    calculationObj.operation = operator
    console.log(calculationObj);
}

let strToDisplay = '';
let calculationObj = {'numbers': [],
    'operation': null,
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
    convertAndStore('add');
    makeDisplayObj(btnSum.innerHTML);
}, false);

const btnSub = document.getElementById('btnSub');
btnSub.addEventListener('click', () => {
    convertAndStore('subtract');
    makeDisplayObj(btnSub.innerHTML);
}, false)

const btnMul = document.getElementById('btnMul');
btnMul.addEventListener('click', () => {
    convertAndStore('multiply');
    makeDisplayObj(btnMul.innerHTML);
}, false)

const btnDiv = document.getElementById('btnDiv');
btnDiv.addEventListener('click', () => {
    convertAndStore('divide');
    makeDisplayObj(btnDiv.innerHTML);
}, false);

const btnClr = document.getElementById('btnClr');
btnClr.addEventListener('click', () => {
    makeDisplayObj('clr');
})



