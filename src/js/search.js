import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btnSearch = document.querySelector('.btn-search');
const searchImagesInput = document.querySelector('.search-images-input');
const inputImagesValue = searchImagesInput.value;

btnSearch.addEventListener('click', event => {
  event.preventDefault();
  console.log(searchImagesInput.value);

  const searchParams = new URLSearchParams({
    key: 46374353,
    q: `"${inputImagesValue}"`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  console.log(searchParams.toString());

  const url = `"<https://pixabay.com/api/?${searchParams}>"`;
  const options = {
    method: 'GET',
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
    });
});
