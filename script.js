function slidesPlagin(activeSlide = 0) { 
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active'); //выбор активного слайда;

    slides.forEach(slide => {
            slide.addEventListener('click', () => {
                clearAcctiveClasses();
            
                slide.classList.add('active')
            })
        }
    )
    
    function clearAcctiveClasses () {
        slides.forEach(slide => {
            slide.classList.remove('active')
        })
    }

}

slidesPlagin(0);

