function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


window.onload = function() {
  const title = document.querySelector('.title');
  const titleContainer = document.querySelector('.title-container');
  
  // Clone le texte pour le défilement infini
  const clonedTitle = title.cloneNode(true);
  titleContainer.appendChild(clonedTitle);
  
  // Fonction pour déplacer le texte
  function scrollText() {
    titleContainer.scrollLeft++;
    if (titleContainer.scrollLeft >= title.offsetWidth) {
      titleContainer.scrollLeft = 0;
    }
  }
  
  // Démarre le défilement
  const scrollInterval = setInterval(scrollText, 50); // ajustez la vitesse selon vos préférences
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(startAnimation, 0);
      setInterval(startAnimation, 10000);
    });

    function startAnimation() {
      let iteration = 0;
      const target = document.querySelector('.title');

      clearInterval(interval);

      interval = setInterval(() => {
        target.innerText = target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 50);
    }

function playSound() {
  var audio = document.getElementById("my-name-is-sound");
  audio.play();
}

function playSound() {
  var audio = document.getElementById("my-name-is-sound");
  audio.play();
}

function baisserSon() {
  var audio = document.getElementById("my-name-is-sound");
  audio.volume = audio.volume * 0.75;
}

function changeSlide(index) {
  var slides = document.querySelectorAll('.slide');
  slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  event.preventDefault();
  return false;
}




