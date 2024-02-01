import _ from 'lodash'

const dataReset = {
    email: "",
    message: "",
};
keyData = "feedback-form-state";

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? dataReset : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};



const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Remove state error: ", error.message);
  }
};

const form = document.querySelector(".feedback-form");
const inputMail = document.querySelector("input");
const inputText = document.querySelector("textarea");

const dataForm = load(keyData); 

console.log(dataForm);

form.elements.email.value = dataForm.email ?? "";
form.elements.message.value = dataForm.message ?? "";

inputMail.addEventListener("input", _.throttle((evt) => {
    dataForm.email = evt.target.value;
    save(keyData, dataForm);
}, 500));

inputText.addEventListener("input", _.throttle((evt) => {
    dataForm.message = evt.target.value;
    save(keyData, dataForm);
},500));

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.removeItem(keyData);
  form.reset();
});