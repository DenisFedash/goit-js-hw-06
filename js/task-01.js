const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesEl.length);

const listEl = document.querySelector('#categories').children;
for (const list of listEl) {
    let category = list.firstElementChild.textContent;   
    let quantityElem = list.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);   
}



