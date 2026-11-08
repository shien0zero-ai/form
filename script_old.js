// 'use strict';

// const p = document.getElementById('output'); // 出力用のp要素

// const text = document.getElementById('textInput');
// text.addEventListener('change', () => {
//   p.textContent = text.value;
// });

// const radio = document.getElementsByName('abcRadio');
//   for (const btn of radio) {
//     btn.addEventListener('change', () => {
//       p.textContent = btn.value;
//     });
//   };

// const checkbox = document.getElementsByName('abcCheck');
//   const values = [];
//   for (const box of checkbox) {
//     box.addEventListener('change', () => {
//       if (box.checked == true) {
//         values.push(box.value);
//       }
//       else {
//         const removeIndex = values.indexOf(box.value);
//         values.splice(removeIndex, 1);
//       }
//       p.textContent = values;
//     });
//   };

//   const select = document.querySelector('select');
//   select.addEventListener('change', () => {
//     p.textContent = select.value;
//   });
// // ［表示］ボタンを押したら…
// document.querySelector('button').addEventListener('click', () => {
//   // 今回のコードはここに書いていきます
//   text.value = '入力を完了しました';

//   const multiSelect = document.querySelector('select[multiple]');
//   const valuesB = [];
//   for (const opt of multiSelect.options) {
//     if (opt.selected == true) {
//         valuesB.push(opt.value);
//     };
//   };
//   p.textContent = valuesB;
// });