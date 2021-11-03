const slides = document.querySelectorAll('.slide');

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
