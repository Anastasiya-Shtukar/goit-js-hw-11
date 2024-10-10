import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const btnSearch = document.querySelector('.btn-search');
const searchImagesInput = document.querySelector('.search-images-input').value;
const gallery = document.querySelector('.gallery');

btnSearch.addEventListener('click', event => {
  event.preventDefault();
  console.log(searchImagesInput.value);

  const searchParams = new URLSearchParams({
    key: '46374353-2f98dff3c8dab99fd2b2fa1f1',
    q: searchImagesInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  console.log(searchParams.toString());

  const url = `https://pixabay.com/api/?${searchParams}`;

  fetch(url, { method: 'GET' })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No results found');
      }

      const galleryImages = data.hits
        .map(
          image => `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source="${image.largeImageURL}"
      alt="${image.tags}"
    />
  </a>
  <div class="characteristics-photo">
  <p class="characteristic">Likes:<span class="characteristic-span">${image.likes}</span></p>
  <p class="characteristic">Views:<span class="characteristic-span">${image.views}</span></p>
  <p class="characteristic">Comments:<span class="characteristic-span">${image.comments}</span></p>
  <p class="characteristic">Downloads:<span class="characteristic-span">${image.downloads}</span></p>
  </div>
</li>`
        )
        .join('');

      gallery.innerHTML = '';

      gallery.insertAdjacentHTML('beforeend', galleryImages);

      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
    });
});
