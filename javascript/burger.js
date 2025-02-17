function toggler() {
  const burger = document.querySelector('#toggler_burger');
  const menu = document.querySelector('.menu');

  if (burger.innerHTML == "menu") {
    burger.innerHTML = "arrow_back";
    menu.style.transform = "translateX(0)";
    body.classList.add('no-scroll');
  }
  else {
    burger.innerHTML = "menu";
    menu.style.transform = "translateX(-100%)";
    body.classList.remove('no-scroll');
  }
}




// let isScrolling;

// window.addEventListener('scroll', function () {
//   const burgerContainer = document.querySelector('.header-bloc__burger');
//   burgerContainer.style.opacity = 0.7;
//   window.clearTimeout(isScrolling);
//   isScrolling = setTimeout(function () {
//     burgerContainer.style.opacity = 1;
//   }, 100);
// });


document.getElementById('toggle-arrow-down').addEventListener('click', function () {
  const Collections = document.querySelector('.collections-ul');
  if (Collections.style.display === 'none' || Collections.style.display === '') {
    Collections.style.display = 'flex'; Collections.style.flexDirection = 'column';
  } else {
    Collections.style.display = 'none';
  }
}
)