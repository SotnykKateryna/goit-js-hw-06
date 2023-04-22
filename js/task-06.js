const inputEl = document.querySelector("#validation-input");
// console.log(inputEl);

const dataLength = Number(inputEl.getAttribute("data-length"));
// console.log(dataLength);


const onTextInput = (event) => {
    const symbolLength = event.target.value.trim().length;
    console.log(symbolLength);

  if (symbolLength === dataLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
   } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}

inputEl.addEventListener('blur', onTextInput);

