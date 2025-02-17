let currentPosition = 0;
const imgs = document.querySelectorAll('.carousel-container__slide__img');
const numberOfImg = imgs.length;
const prevButton = document.querySelector('.btn--carousel--left');
const nextButton = document.querySelector('.btn--carousel--right');

function moveCarousel() {
  const decal = currentPosition * 100;
  document.querySelector('.carousel-container__slide').style.transform = `translateX(-${decal}%)`;
}

nextButton.addEventListener('click', () => { currentPosition = (currentPosition + 1) % numberOfImg; moveCarousel(); });
prevButton.addEventListener('click', () => { currentPosition = (currentPosition - 1 + numberOfImg) % numberOfImg; moveCarousel(); });


