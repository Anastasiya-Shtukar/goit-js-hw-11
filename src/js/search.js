import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btnSearch = document.querySelector('.btn-search');
const searchImagesInput = document.querySelector('.search-images-input');
const inputImagesValue = searchImagesInput.value;
const gallery = document.querySelector('.gallery');

btnSearch.addEventListener('click', event => {
  event.preventDefault();
  console.log(searchImagesInput.value);

  const searchParams = new URLSearchParams({
    key: '46374353-2f98dff3c8dab99fd2b2fa1f1',
    q: `'${inputImagesValue}'`,
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
      const galleryImages = data
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
  <div class="likes">Likes:${image.likes}</div>
  <div class="views">Views:${image.views}</div>
  <div class="comments">Comments:${image.comments}</div>
  <div class="downloads">Downloads:${image.downloads}</div>
  </div>
</li>`
        )
        .join('');

      gallery.insertAdjacentHTML('beforeend', galleryImages);
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
