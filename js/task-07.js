const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', () => {
    const size = refs.inputEl.value;
    refs.spanEl.style.fontSize = size + 'px';
});
