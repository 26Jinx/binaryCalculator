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
btn0.addEventListener('click', function() {
    makeDisplayObj(btn0.innerHTML);
})

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function() {
    makeDisplayObj(btn1.innerHTML);
});

const btnSum = document.getElementById('btnSum');
btnSum.addEventListener('click', function() {
    convertAndStore('add');
    makeDisplayObj(btnSum.innerHTML);
});

const btnSub = document.getElementById('btnSub');
btnSub.addEventListener('click', function() {
    convertAndStore('subtract')
    makeDisplayObj(btnSub.innerHTML)
})

