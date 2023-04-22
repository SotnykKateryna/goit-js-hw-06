const inputEl = document.querySelector("#validation-input");
// console.log(inputEl);

const dataLength = Number(inputEl.getAttribute("data-length"));
console.log(dataLength);


const onTextInput = (event) => {
    const symbolLength = event.target.value.length;
    console.log(symbolLength);

  if (symbolLength === dataLength) {
    inputEl.classList.trim().add('valid');
    inputEl.classList.trim().remove('invalid');
   } else {
    inputEl.classList.trim().add('invalid');
    inputEl.classList.trim().remove('valid');
  }
}

inputEl.addEventListener('blur', onTextInput);

