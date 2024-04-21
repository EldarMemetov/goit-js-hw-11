import { searchFormImg } from './js/pixabay-api.js';
import {
  showLoader,
  hideLoader,
  createMarkup,
  clearImagesGallery,
  searchError,
  initializeLightbox,
} from './js/render-functions.js';

const loaderContainer = document.querySelector('.loader-container');
const form = document.getElementById('form');
const ulGroup = document.querySelector('.ul-group');

form.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  showLoader(loaderContainer);

  clearImagesGallery(ulGroup);

  const inputForm = form.elements.img.value.trim();

  searchFormImg(inputForm)
    .then(images => {
      if (images.length === 0) {
        clearImagesGallery(ulGroup);
        searchError();
      } else {
        renderImages(images);
      }
    })
    .catch(error => {
      console.error(error);
      searchError();
    })
    .finally(() => {
      hideLoader(loaderContainer);
      form.reset();
    });
}

function renderImages(images) {
  clearImagesGallery(ulGroup);
  images.forEach(image => {
    const markup = createMarkup(image);
    ulGroup.insertAdjacentHTML('beforeend', markup);
  });
  const lightbox = initializeLightbox();
  lightbox.refresh();
}
