'use strict';

const output = document.getElementById('output');
console.log(output);

const text = document.getElementById('textInput');
console.log(text);

document.querySelector('button').addEventListener('click', () => {
    output.textContent = text.value;
});