// кількість категорій

const allListEl = categories.querySelectorAll('.item')

console.log('Number of categories:', allListEl.length);

// заголовк елемента і кількість елементів

allListEl.forEach(element => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.querySelectorAll('li').length);
});