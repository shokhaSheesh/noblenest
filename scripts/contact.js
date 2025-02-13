const scriptURL = 'https://script.google.com/macros/s/AKfycbzAYyL0BAWmGNYFxvVgEGRKGRKEoPrvgxx02pyMOM8fHjgelXb9sy6BS6C0Nt0hpieX/exec'
const form = document.forms['submit-to-google-sheet'];
const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');
const formMsg = document.querySelector('.form-msg');
const btn = document.querySelector('form button');

btn.addEventListener('click', e => {
  e.preventDefault()

  const name = inputs[0];
  const email = inputs[1];
  const phoneNumber = inputs[2];
  const companyName = inputs[3];

  if(!name.value || !email.value || !phoneNumber.value || !companyName.value || !textarea.value) {
    formMsg.style.display = 'block';
    formMsg.style.color = 'red';
    formMsg.innerHTML = `Please fill all inputs`;

    setTimeout(() => {
      formMsg.style.display = 'none';
    }, 7000)

    inputs.forEach(input => {
      input.style.border = input.value ? `2px solid var(--blue-border)` : `2px solid red`;
    });

    textarea.style.border = textarea.value ? `2px solid var(--blue-border)` : `2px solid red`;

    return;
  }
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))

  inputs.forEach(input => {
    input.style.border = `2px solid var(--blue-border)`
    input.value = ``;
  })

  textarea.value = ``;
  textarea.style.border = `2px solid var(--blue-border)`

  formMsg.style.display = 'block';
  formMsg.style.color = 'green';
  formMsg.innerHTML = `Your inquiry was submitted. We will get back to you in 24 hours.`
  
  setTimeout(() => {
    formMsg.style.display = 'none';
  },7000)
  
})

console.log(btn);