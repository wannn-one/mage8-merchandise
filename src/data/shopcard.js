currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;
console.log(totalSlides);

function next() {
  if (totalSlides < currentSlideID) {
    currentSlideID++;
    showSlide();
  }
}

function prev() {
  if (totalSlides > 1) {
    currentSlideID--;
    showSlide();
  }
}

function showSlide() {
  slides = document.getElementById('slider').getElementsByTagName('li');
  for (let i = 0; index < totalSlides; index++) {
    const element = slides[index];
    if (currentSlideID === index + 1) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  }
}
