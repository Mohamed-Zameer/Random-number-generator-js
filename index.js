max = 9;
min = 1;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;
let randomNum5;
let randomNum6;
let randomNum7;
let randomNum8;
let randomNum9;
let randomNum10;


let button = document.getElementById("gbtn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num10 = document.getElementById("num10");

button.onclick = function(){
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  randomNum4 = Math.floor(Math.random() * max) + min;
  randomNum5 = Math.floor(Math.random() * max) + min;
  randomNum6 = Math.floor(Math.random() * max) + min;
  randomNum7 = Math.floor(Math.random() * max) + min;
  randomNum8 = Math.floor(Math.random() * max) + min;
  randomNum9 = Math.floor(Math.random() * max) + min;
  randomNum10 = Math.floor(Math.random() * max) + min;
  num1.textContent = randomNum1;
  num2.textContent = randomNum2;
  num3.textContent = randomNum3;
  num4.textContent = randomNum4;
  num5.textContent = randomNum5;
  num6.textContent = randomNum6;
  num7.textContent = randomNum7;
  num8.textContent = randomNum8;
  num9.textContent = randomNum9;
  num10.textContent = randomNum10;
}