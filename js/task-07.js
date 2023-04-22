
const input = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

console.log(input);
console.log(textEl);

function onTextChange (event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}

input.addEventListener('input', onTextChange);

