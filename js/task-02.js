const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const itemEl = ingredients.map((ingredients) => {
  const listItemEl = document.createElement('li');
  listItemEl.classList.add('item');
  listItemEl.textContent = ingredients;
  console.log(listItemEl);

  return listItemEl;
});

listEl.append(...itemEl);
