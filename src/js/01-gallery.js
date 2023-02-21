import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryMarkup = createGalleryMarkup(galleryItems);
const galleryList = document.querySelector(".gallery");

galleryList.innerHTML = galleryMarkup;
new SimpleLightbox(".gallery a", {
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    scrollZoom: false,
});

function createGalleryMarkup(items) {
    return items
        .map(
            (item) =>
                `
          <a class="gallery__item" href=${item.original}>
          <img class="gallery__image" src=${item.preview} alt=${item.description} />
        </a>
        `
        )
        .join("");
}

// Change code below this line

console.log(galleryItems);
