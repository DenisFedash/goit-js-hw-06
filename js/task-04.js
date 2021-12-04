const ref = {
    del: document.querySelector("[data-action='decrement']"),
    add: document.querySelector("[data-action='increment']"),    
}

let counterValue = 0;
const decrement = () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
};

const increment = () => {
    counterValue += 1;

    document.querySelector('#value').textContent = counterValue;
};    

ref.del.addEventListener('click', decrement);
ref.add.addEventListener('click', increment);

