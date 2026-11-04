'use strict';

const p = document.getElementById('output'); // 出力用のp要素

// ［表示］ボタンを押したら…
document.querySelector('button').addEventListener('click', () => {
  // 今回のコードはここに書いていきます
  const text = document.getElementById('textInput');
  p.textContent = text.value;
  text.value = '入力完了しました';

  const radio = document.getElementById('abcRadio');
  for (const btn of radio) {
    if (btn.checked == true) {
        p.textContent = btn.value;
    };
  };

  const checkbox = document.getElementById('abcCheck');
  const valuesA = [];
  for (const box of checkbox) {
    if (box == true) {
        valuesA.push(box.value);
    };
  };
  p.textContent = valuesA;

  const select = document.querySelector('select');
  p.textContent = 'select.value';

  const multiSelect = document.querySelector('select[multiple]');
  const valuesB = [];
  for (const opt of multiSelect.options) {
    if (opt.selected == true) {
        valuesB.push(opt.value);
    };
  };
  p.textContent = valuesB;
});
//https://zenn.dev/ojk/books/intro-to-javascript/viewer/js-form#:~:text=input%20%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88-,input,-%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AF%20HTML