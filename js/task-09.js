function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divEl: document.querySelector('.widget'),
  spanEl: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
};

refs.btnEl.addEventListener("click", function (e) {
  document.body.style.backgroundColor = [`#${Math.floor(Math.random() * 16777215).toString(16)}`];
  refs.spanEl.textContent = e.getRandomHexColor;
});





