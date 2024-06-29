function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxArea = document.querySelector("#boxes");
console.log(inputNumber);
console.log(btnCreate);
console.log(btnDestroy);

btnCreate.addEventListener("click", createBox);
btnDestroy.addEventListener("click", destroyBox);

function createBox(event) {
  const inputValue = inputNumber.value;
  if (inputValue < 1 || inputValue > 100) {
    console.log(
      "the number must be greater than 0 and less than or equal to 100"
    );
    return;
  }
  let boxSize = 30;
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < inputValue; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.append(box);
    boxSize += 10;
  }
  boxArea.append(fragment);
  inputNumber.value = "";
}

function destroyBox(event) {
  boxArea.innerHTML = "";
}
