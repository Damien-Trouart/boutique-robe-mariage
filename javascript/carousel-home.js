let currentPosition = 0;
const collections = document.querySelectorAll('.carousel-container__slide__collection');
const numberOfCollections = collections.length;
const prevButton = document.querySelector('.btn--carousel--left');
const nextButton = document.querySelector('.btn--carousel--right');

function moveCarousel() {
  const decal = currentPosition * 100;
  document.querySelector('.carousel-container__slide').style.transform = `translateX(-${decal}%)`;
}

nextButton.addEventListener('click', () => { currentPosition = (currentPosition + 1) % numberOfCollections; moveCarousel(); });
prevButton.addEventListener('click', () => { currentPosition = (currentPosition - 1 + numberOfCollections) % numberOfCollections; moveCarousel(); });