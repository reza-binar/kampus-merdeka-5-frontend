// Document write will be executed when html is loaded
// document.write("Hello World");
// document.write("<h2>Saya sedang belajar DOM</h2>");

// DOM Selector (get element by id)
const app = document.getElementById("app");
app.innerText = "This is app element";

app.style.backgroundColor = "gold";
app.style.padding = "10px";

// DOM Selector (get elements by class name)
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);
// paragraph 1 (index = 0)
paragraphs[0].innerText = "This is my first paragraph";
paragraphs[0].style.color = "red";
// paragraph 2 (index = 1)
paragraphs[1].style.color = "green";
// paragraph 3 (index = 2)
paragraphs[2].style.color = "blue";
// After 5 seconds, I will make these colors to black again
setTimeout(() => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "black";
  }
}, 5000);

// DOM Manipulation
const title = document.createElement("h1");
title.textContent = "This is title that created by DOM";
document.body.append(title);
// I want to remove paragraph 3 after 7 seconds
setTimeout(() => {
  paragraphs[2].remove();
}, 7000);

// Change Color App
const bgColor = document.getElementById("bgColor");
const textColor = document.getElementById("textColor");

// It will detect, if there any change in the bgColor input, the function in the event listener will be ran
bgColor.addEventListener("change", (event) => {
  document.body.style.backgroundColor = event.target.value;
});

// It will detect, if there any change in the textColor input, the function in the event listener will be ran
textColor.addEventListener("change", (event) => {
  document.body.style.color = event.target.value;
});
