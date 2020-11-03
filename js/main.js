'use strict'

// 0 button functionality
function displayDigit(button) {
    let calcWindow = document.getElementById('res');

    if (button === 0) {
        calcWindow.innerHTML = btn0.innerHTML;
    }

    else if (button === 1) {
        calcWindow.innerHTML = btn1.innerHTML;
    }
}

const btn0 = document.getElementById('btn0');
btn0.addEventListener('click', function() {
    displayDigit(0);
})

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function() {
    displayDigit(1)
});

