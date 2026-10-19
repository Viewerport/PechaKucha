const startButton = document.getElementById("startSlides");
const fullscreenButton = document.getElementById("fullscreen");
const slideImage = document.getElementById("slide");
const timeStats = document.getElementById("timeStats");
let currentSlide = 0;
let startTime = false;

startButton.addEventListener("click", function(){startTime = Date.now(); slideImage.requestFullscreen();});
fullscreenButton.addEventListener("click", function(){slideImage.requestFullscreen();});

function advanceSlide(){
  slideImage.src = "pictures/slide" + currentSlide + ".png";

  if (currentSlide == 10){
    slideImage.alt = "the pecha kucha has finished, pleas clap";
  }
  if (currentSlide < 10){
    currentSlide ++;
  }
};

function main(){
  if (startTime){
  }
}

setInterval(main);
