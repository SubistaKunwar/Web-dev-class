// const boss = document.getElementById("boss");

// boss.innerHTML = "FatalGuts";

// window.addEventListener("DOMContentLoaded", () => {});

const boxes = document.getElementsByClassName("box");
console.log(boxes);

for (let i = 0; i < boxes.length; i++) {
  if (i == 0) {
    boxes[i].innerHTML = "This is Box 1";
  }

  if (i == 1) {
    boxes[i].innerHTML = "This is Box 2";
  }
  //   console.log(boxes[i]);
}
// querySelector() - returns the first element that matches a specified CSS selector(s) in the document.
const box = document.querySelector(".wrapper .box");
box.innerHTML = "This is the first box";
const boxes1 = document.querySelectorAll(".box");
boxes1.forEach((box, index) => {
  if (index == boxes1.length - 1) {
    box.innerHTML = "This is the last box";
  }
}); 