const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesEl.length);

const listEl = document.querySelector('#categories').children;
for (let i = 0; i < listEl.length; i += 1) {
    let category = listEl[i].firstElementChild.textContent;   
    let quantityElem = listEl[i].lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);
};



