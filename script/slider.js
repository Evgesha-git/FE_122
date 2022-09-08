const slider = (selector) => {
    const container = document.querySelector(selector);
    const slideContainer = container.querySelector('.sliders');
    if (!slideContainer) return;
    
    const slides = slideContainer.querySelectorAll('.slide');
    if (!slides || !slides.length > 1) return;

    const svitchSlide = (event) => {
        let buf = event.target.classList.contains('next');

        let x = slideContainer.style.transform || '0';
        x = x.replace('translate(', '');
        x = x.replace(')', '');
        x = Math.abs(parseInt(x));

        if(buf){
            if (x < (slides.length * 100) - 100){
                x += 100;
            }else{
                x = 0;
            }
        }

        if (!buf){
            if (x > 0){
                x -= 100;
            }else{
                x = (slides.length * 100) - 100;
            }
        }

        slideContainer.style.transform = `translate(-${x}%)`;
    }

    const buttons = container.querySelectorAll('.button');
    buttons.forEach(element => {
        element.addEventListener('click', svitchSlide);
    });
}

slider('.container');