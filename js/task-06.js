const inputEl = document.querySelector('#validation-input');
const dataLengthEl = inputEl.dataset.length;

inputEl.addEventListener('blur', onBlurInput);
function onBlurInput(event) {
   if(event.currentTarget.value.length === Number(dataLengthEl)){
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
   } else {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   };
};