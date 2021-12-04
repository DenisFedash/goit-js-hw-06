const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesEl.length);
for (const list of categoriesEl) {
    let category = list.firstElementChild.textContent;   
    let quantityElem = list.lastElementChild.children.length;
    console.log(`Category: ${category} \nElements: ${quantityElem}`);   
}




