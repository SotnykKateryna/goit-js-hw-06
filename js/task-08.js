
const form = document.querySelector('.login-form');

// console.log(form.elements);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in the all fields');
    }

    const data = {
        [email.name]: email.value,
        [password.name]: password.value
    };

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    console.log(data);

    event.currentTarget.reset();
}


  