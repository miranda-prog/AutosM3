document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el slider de testimonios
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
        // Optimización: Elimina la clase 'active' de todos los slides
        // para evitar múltiples reflows en cada iteración del bucle.
        testimonialSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        // Optimización: Agrega la clase 'active' solo al slide correcto.
        if (testimonialSlides[index]) {
            testimonialSlides[index].classList.add('active');
        }
    }

    function startAutoplay() {
        stopAutoplay();
        testimonialInterval = setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    function stopAutoplay() {
        clearInterval(testimonialInterval);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            stopAutoplay();
            currentTestimonial = (currentTestimonial - 1 + testimonialSlides.length) % testimonialSlides.length;
            showTestimonial(currentTestimonial);
            startAutoplay();
        });

        nextBtn.addEventListener('click', () => {
            stopAutoplay();
            currentTestimonial = (currentTestimonial + 1) % testimonialSlides.length;
            showTestimonial(currentTestimonial);
            startAutoplay();
        });
    }

    if (testimonialContainer) {
        testimonialContainer.addEventListener('mouseenter', stopAutoplay);
        testimonialContainer.addEventListener('mouseleave', startAutoplay);
    }

    if (testimonialSlides.length > 0) {
        showTestimonial(currentTestimonial);
        startAutoplay();
    }
    
    if (window.AOS) {
        AOS.init({ duration: 700, once: true });
    }
});