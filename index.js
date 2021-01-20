const baseUrl = 'https://5ff2e7d128c3980017b18ca3.mockapi.io/api/v1/form';

const battonElem = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const loginForm = document.querySelector('.login-form');

const onInputValid = () => { 
  errorElem.textContent = '';

 if(loginForm.reportValidity()) {
    battonElem.disabled = false 
 } else {
    battonElem.disabled = true;
 }
}
const submittingFormData = (event) => {
  event.preventDefault();

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;'
    },
    body: JSON.stringify(Object.fromEntries(loginForm)),
  })
    .then(response => {
        if(response.ok) {
            return response.text();
        }
        throw new Error('Failed to create user');
    })
    .then(userData =>{  loginForm.reset();
     alert(userData)
    })
    .catch(error => { 
        errorElem.textContent = error.message;
    })
};

loginForm.addEventListener('input', onInputValid)
loginForm.addEventListener('submit', submittingFormData);