import gallery from './gallery-items.js'
const list = document.querySelector('.js-gallery')
const lightbox = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");
const overlay = document.querySelector(".lightbox__overlay");
const btn = document.querySelector(".lightbox__button");


gallery.map(el => {
  list.innerHTML += `<li class="gallery__item"><a class="gallery__link" href="${el.original}">
 <img  class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}"></a></li>`
})


