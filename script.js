'use strict';
//一番下の表示を保存
const output = document.getElementById('output');
console.log(output);
//テキストの取得
const text = document.getElementById('textInput');
console.log(text);
//PWを取得
const pw = document.getElementById('password');
let pwKeep;

//表示ボタンを押したときに保存されてるテキストを表示
document.querySelector('button').addEventListener('click', () => {
    if (pw.value !== '') {
        pwKeep = '入力あり';
    } else {
        pwKeep = '未入力';
    };
    output.textContent = `テキスト: ${text.value} 
    PW: ${pwKeep}`;
    
});