function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");
create.addEventListener('click', getAmount);
destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = document.querySelector('#controls input').value;
  createBoxes(amount);
};

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createElement('fragment');
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement('div');
    let color = 0;
    color = getRandomHexColor({color});    
    div.style = `width: ${size}px; height: ${size}px; background-color: ${color}`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = ' ';
}

