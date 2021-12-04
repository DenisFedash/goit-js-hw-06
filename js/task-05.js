const ref = {
    form: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
};

ref.form.addEventListener('input', (event) => {     
    ref.span.textContent = event.currentTarget.value || 'Anonymous';  
}
);


       
        
    








