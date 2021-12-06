function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divEl: document.querySelector('.widget'),
  spanEl: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
};

let color = -1;
refs.btnEl.addEventListener("click", function () {
  color = getRandomHexColor(color);
  document.body.style.backgroundColor = color;
  refs.spanEl.textContent = color;  
});