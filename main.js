const form = document.querySelector('form');
const button = form.querySelector('button');
const errorMsg = 'Please provide a valid email address';
const emptyMsg = 'Whoops! It looks like you forgot to add your email.'

const error = document.createElement('p');
error.classList.add('error-text');
error.textContent = errorMsg;

const empty = document.createElement('p');
empty.classList.add('empty-text');
empty.textContent = emptyMsg;

function checkEmail(e) {
    e.preventDefault();
    const email = document.querySelector('input').value;
    if (email.length === 0) {
        form.classList.add('empty');
        form.appendChild(empty, button);
    }
    else if(!isValidEmail(email)) {
    form.classList.add('error');
    form.appendChild(error, button);
    form.removeChild(empty);
    } else {
    form.classList.remove('error');
    form.removeChild(error);
    }
    console.log(email);
}

function isValidEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

form.addEventListener('submit', checkEmail);

