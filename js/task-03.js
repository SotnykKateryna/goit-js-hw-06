const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");

// const makeGallery = ({ url, alt }) =>
//   `<li class="list-item">
// <img class="img-item" src="${url}" alt="${alt}">
// </li>`;

// const markup = images.map((el) => makeGallery(el)).join('');

const markup = images.map((el) => `<li class="list-item">
<img class="img-item" src="${el.url}" alt="${el.alt}">
</li>`).join('');

// console.log(markup);

listEl.insertAdjacentHTML("afterbegin", markup);

console.log(listEl);

