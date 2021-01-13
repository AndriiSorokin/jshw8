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

list.addEventListener("click", e => {
  e.preventDefault();
  const modalLink = e.target.dataset.source;
  console.log(modalLink);
  lightbox.classList.add("is-open");
  modalImg.src = modalLink;
});

btn.addEventListener("click", () => {
     removeModal()
  modalImg.src = "";
});

overlay.addEventListener("click", e => {
  // if (e.currentTarget !== 'IMG') {
  //    lightbox.classList.remove("is-open");
  //   modalImg.src = "";}
  if (e.target === e.currentTarget) {
      // lightbox.classList.remove("is-open");
      removeModal()
  }
});

window.addEventListener("keydown", e => {
  if (e.code === 'Escape') {
       removeModal()
    }
})

function removeModal() {
lightbox.classList.remove("is-open")
}