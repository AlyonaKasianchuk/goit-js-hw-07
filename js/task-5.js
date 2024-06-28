function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBtn = document.querySelector(".change-color");
changeBtn.addEventListener("click", handleClick);

function handleClick(event) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  document.querySelector(".color").textContent = randomColor;
}
