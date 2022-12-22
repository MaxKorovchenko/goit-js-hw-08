import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FORM_MESSAGE = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(FORM_MESSAGE, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();

  const savedData = localStorage.getItem(FORM_MESSAGE);
  console.log(JSON.parse(savedData));

  localStorage.clear();
}

function updateFormFields() {
  const getData = localStorage.getItem(FORM_MESSAGE);
  const getDataParsed = JSON.parse(getData);

  if (getData) {
    form.elements.email.value = getDataParsed.email;
    form.elements.message.value = getDataParsed.message;
  }
}
updateFormFields();
