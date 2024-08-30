const span = document.querySelector("span");
const input = document.querySelector(".input");
const button = document.querySelector("button");
const speed = document.querySelector(".range-input");
const duration = document.querySelector("#duration");
let typingSpeed = 200;
// speed.default = 200;

const wordList = ["Developer.", "Coder.", "Writer."];
let wordIndex = 0;
let index = 0;

const word = "Developer";
let stayTime = 0;
let back = false;

setInterval(() => {
  if (stayTime) {
    return stayTime--;
  }
  if (!back) {
    stayTime = 1;
    span.innerText = span.innerText + wordList[wordIndex][index];
    index++;
  } else {
    span.innerText = span.innerText.slice(0, span.innerText.length - 1);
    index--;
  }
  if (index === wordList[wordIndex].length) {
    back = true;
    stayTime = 6;
  }
  if (span.innerText.length === 0) {
    back = false;
    wordIndex++;
  }
  if (wordIndex === wordList.length) {
    wordIndex = 0;
  }
}, parseInt(duration.value) * 100);

button.addEventListener("click", (e) => {
  let inputValue = input.value;
  if (inputValue) {
    wordList.push(inputValue + ".");
  }
  input.value = "";
});

speed.addEventListener("change", () => {
  speed.value = typingSpeed;
});
