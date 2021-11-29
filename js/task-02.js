const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstItem = document.createElement('li');
firstItem.classList.add('item');
firstItem.textContent = 'Potatoes';
console.log(firstItem);

const secondItem = document.createElement('li');
secondItem.classList.add('item');
secondItem.textContent = 'Mushrooms';
console.log(secondItem);

const thirdItem = document.createElement('li');
thirdItem.classList.add('item');
thirdItem.textContent = 'Garlic';
console.log(thirdItem);

const fourthItem = document.createElement('li');
fourthItem.classList.add('item');
fourthItem.textContent = 'Tomatos';
console.log(fourthItem);

const fifthItem = document.createElement('li');
fifthItem.classList.add('item');
fifthItem.textContent = 'Herbs';
console.log(fifthItem);

const sixthItem = document.createElement('li');
sixthItem.classList.add('item');
sixthItem.textContent = 'Condiments';
console.log(sixthItem);

const list = document.querySelector('#ingredients');
list.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixthItem);
