
const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

const onTextInput = (event) => {
    if (inputEl.value === "") {
        outputEl.textContent = 'Anonymous';
    } else {
        outputEl.textContent = event.target.value;
    }
}

inputEl.addEventListener('input', onTextInput);
