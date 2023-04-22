
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const valueEl = document.querySelector('#value')
const incrementBtn = document.querySelector('button[data-action="increment"]')

console.log(decrementBtn);
console.log(valueEl);
console.log(incrementBtn);

const counterValue = {
    value: 0,
    increment () {
        this.value += 1;
    },
    decrement () {
        this.value -= 1;
    },
};

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
});

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
});