const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const lis = ingredients.map((item) => {
  const li = document.createElement('li');
  li.textContent = item;

  return li;
});

const ulEl = document.querySelector('#ingredients').append(...lis);

