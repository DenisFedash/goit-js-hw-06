function getRandomHexColor() {  
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanEl: document.querySelector('.color'),
  btnEl: document.querySelector('.change-color'),
};

refs.btnEl.addEventListener("click", function () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.spanEl.textContent = color;  
});


