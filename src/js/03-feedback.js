import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = "feedback-form-state";
const savedSettings = localStorage.getItem(LOCAL_STORAGE_KEY);
let userData = {
}

form.addEventListener('input', throttle(event => {
    userData[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
}, 500))
form.addEventListener('submit', onSubmit)

formCheck(savedSettings);

function formCheck(savedSettings) {
    try {
        if (savedSettings) {
            const parsedSettings = JSON.parse(savedSettings);
            form[0].value = parsedSettings.email || '';
            form[1].value = parsedSettings.message || '';
        }
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    } 
}

function onSubmit(event) {
    event.preventDefault();
    console.log(userData);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    userData = {

    }
    event.target.reset();
};