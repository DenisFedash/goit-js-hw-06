const formEl = document.querySelector('.login-form');

formEl.addEventListener("submit", onSubmit);
function onSubmit(event) {
    event.preventDefault();
    const { elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return console.log("Все поля должны быть заполнены!");
    }
    
    const formData = {
        email: `${ email.value }`,
        password: `${ password.value }`,
    };
    console.log(formData);
    
    event.currentTarget.reset()
};


