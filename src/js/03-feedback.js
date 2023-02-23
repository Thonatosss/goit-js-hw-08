import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const emailInput = document.querySelector('input');
const messageTextArea = document.querySelector('textarea');
const submitBtn = document.querySelector('button');
const LOCAL_STORAGE_KEY = "feedback-form-state";
const savedSettings = localStorage.getItem(LOCAL_STORAGE_KEY);
let userData = {
}

form.addEventListener('input', throttle(event => {
    userData[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
}, 500))
submitBtn.addEventListener('click', onSubmit);
if (savedSettings) {
    const parsedSettings = JSON.parse(savedSettings);
    emailInput.value = parsedSettings.email || '';
    messageTextArea.value = parsedSettings.message || '';
}


function onSubmit(event) {
    event.preventDefault();
    console.log(userData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    userData = {

    }
    form.reset();
}
