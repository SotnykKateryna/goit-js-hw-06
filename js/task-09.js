function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorEl = document.querySelector('.color')

const swapBtnEl = document.querySelector('.change-color')

// console.log(colorEl);
// console.log(swapBtnEl);

swapBtnEl.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor();
  console.log(getRandomHexColor());
})