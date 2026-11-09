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
//ラジオボタンを取得
const radio = document.getElementsByName('abcRadio');
let radioKeep = '未選択';
//チェックボタンを取得
const checkbox = document.getElementsByName('abcCheck');
const checkVals = [];
//ドロップダウンメニューを取得
const select = document.querySelector('select');

//表示ボタンを押したときに保存されてるテキストを表示
document.querySelector('button').addEventListener('click', () => {
    // if (text.value !== '') {
    //     text 
    // } else {
    //     text.value = '未入力';
    // };
    if (pw.value !== '') {
        pwKeep = '入力あり';
    } else {
        pwKeep = '未入力';
    };
    for (const btn of radio) {
        if (btn.checked === true) {
            radioKeep = btn.value;
        }
    };
    for (const box of checkbox) {
        if (box.checked === true) {
            checkVals.push(box.value);
        };
    }

    output.textContent = `テキスト: ${text.value} 
    PW: ${pwKeep}
    ラジオボタン: ${radioKeep}
    チェックボックス: ${checkVals}
    ドロップダウンメニュー: ${select.value}`;
    
});