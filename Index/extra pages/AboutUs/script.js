function createSlider(sliderId, prevButtonId, nextButtonId) {
    const slider = document.querySelector(sliderId);
    const slides = slider.querySelectorAll('.slide');
    const prevButton = document.querySelector(prevButtonId);
    const nextButton = document.querySelector(nextButtonId);

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}vw)`; 
    }

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        updateSliderPosition();
    }

    function showPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        updateSliderPosition();
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);
}

// Initialize both sliders
createSlider('#slider1', '#prev1', '#next1');
createSlider('#slider2', '#prev2', '#next2');