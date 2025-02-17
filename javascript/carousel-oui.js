// Tableau carouselsData regroupant tous les carousels photo de la page, que l'on va pouvoir ensuite utiliser pour générer le html sans devoir l'écvrir manuellement pour chaque carousel et se répéter

const carouselsData = [
  {
    id: 1, carouselPictures: ["../photos/clientes/morena_28-septembre/1.jpg", "../photos/clientes/morena_28-septembre/2.jpg", "../photos/clientes/morena_28-septembre/3.jpg", "../photos/clientes/morena_28-septembre/4.jpg"]
  },
  {
    id: 2, carouselPictures: ["../photos/clientes/fabienne_19-septembre/1.jpg", "../photos/clientes/fabienne_19-septembre/2.jpg", "../photos/clientes/fabienne_19-septembre/3.jpg"]
  },
  {
    id: 3, carouselPictures: ["../photos/clientes/clotilde_18-septembre/1.jpeg", "../photos/clientes/clotilde_18-septembre/2.jpg", "../photos/clientes/clotilde_18-septembre/3.jpg"]
  },
  {
    id: 4, carouselPictures: ["../photos/clientes/sixtine_5-juin/1.png"]
  },
  {
    id: 5, carouselPictures: ["../photos/clientes/christelle_18-septembre/1.jpg", "../photos/clientes/christelle_18-septembre/2.jpg", "../photos/clientes/christelle_18-septembre/3.jpg"]
  },
  {
    id: 6, carouselPictures: ["../photos/clientes/marie_22-aout/1.jpg", "../photos/clientes/marie_22-aout/2.jpg", "../photos/clientes/marie_22-aout/3.jpg"]
  }
];


// Fonction pour générer le-dit html des carousels

function createCarousel(carouselInfo) {
  const carouselHTML =
    ` 
      <div class = "carousel-container" id = "carousel-oui-${carouselInfo.id}">
        <div class = "carousel-container__slide"> 
          ${carouselInfo.carouselPictures.map(imgPath => `
            <div class = "carousel-container__slide__img">
              <img src = "${imgPath}" alt = "mariée">
            </div>
          `).join('')}
        </div>
        <button class="btn btn--carousel btn--carousel--left">‹</button>
        <button class="btn btn--carousel btn--carousel--right">›</button>
      </div>
      
`;
  return carouselHTML;
}


const carouselOui = document.querySelector("#carousel-oui");

carouselsData.forEach(carouselInfo => {
  const generatedCarouselHTML = createCarousel(carouselInfo);
  carouselOui.innerHTML += generatedCarouselHTML;
});
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



