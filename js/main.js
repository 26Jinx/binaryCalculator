'use strict'

// display digits to res window
function displayObj(str) {
    let calcWindow = document.getElementById('res');
    calcWindow.innerHTML = str;
}

// create object to display
function makeDisplayObj(obj) {

    if (strToDisplay) {
        strToDisplay += obj.toString();
    } else {
        strToDisplay = obj.toString();
    }

    return displayObj(strToDisplay);
}

function storeNumber() {
    enteredNumbers.push(Number(strToDisplay))
}

let strToDisplay = '';
let enteredNumbers = [];

const btn0 = document.getElementById('btn0');
btn0.addEventListener('click', function() {
    makeDisplayObj(btn0.innerHTML);
})

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function() {
    makeDisplayObj(btn1.innerHTML);
});

const btnSum = document.getElementById('btnSum');
btnSum.addEventListener('click', function() {
    storeNumber();
    makeDisplayObj(btnSum.innerHTML);
})

