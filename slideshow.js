const startButton = document.getElementById("startSlides");
const fullscreenButton = document.getElementById("fullscreen");
const timeStats = document.getElementById("timeStats");
const slideImage = document.getElementById("slide");
let startTime = false;
let currentSlide = 0;
let canAdvance = true;

startButton.onclick = function(){startTime = Date.now(); slideImage.requestFullscreen()};
fullscreenButton.onclick = function(){slideImage.requestFullscreen()};

function advanceSlide(){
  let fileName = "pictures/slide" + currentSlide + ".png";
  slideImage.src = fileName;

  if (currentSlide == 10){
    slideImage.alt = "the pecha kucha has finished, please clap and imagine a cool ending slide";
  }
  
  if (currentSlide < 10){
    currentSlide ++;
  }
}

function main(){
  if (startTime){
    //10 seconds
    const slideInterval = 10;
    
    const deltaTime = Date.now() - startTime;
    const deltaSeconds = Math.floor(deltaTime / 1000);

    if (deltaSeconds % slideInterval == 0){
      if (canAdvance){
        advanceSlide();
      }
      canAdvance = false;
    }else{
      canAdvance = true;
    }

    timeStats.innerHTML = "START: " + startTime + "<br>DELTA: " + deltaTime / 1000;
  }
}

setInterval(main);
