const redBtn = document.querySelector(".red-btn");
const textBox = document.querySelector("#text-box");

if (redBtn) {
  redBtn.addEventListener("click", () => {
    textBox.innerHTML = "Red Button Clicked";
  });
}