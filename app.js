// Menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav.menu');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    });
    document.querySelectorAll('nav.menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navMenu.classList.remove('open');
            document.body.classList.remove('menu-open');
        });
    });
});
// Esta es la función corregida para la galería.
function initializeGallery(autoData) {
    const swiperWrapper = document.getElementById('swiper-images');
    const thumbsGallery = document.getElementById('thumbs-gallery');

    // Limpiar galerías existentes
    swiperWrapper.innerHTML = '';
    thumbsGallery.innerHTML = '';

    // Generar los slides del Swiper y las miniaturas
    autoData.imagenes.forEach((img, index) => {
        // Slide principal
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<a href="${img.src}" class="glightbox" data-gallery="auto"><img src="${img.src}" alt="${img.alt}" loading="lazy"></a>`;
        swiperWrapper.appendChild(slide);

        // Miniatura
        const thumb = document.createElement('img');
        thumb.src = img.thumb;
        thumb.alt = img.alt;
        thumb.setAttribute('data-slide', index);
        if (index === 0) {
            thumb.classList.add('active');
        }
        thumbsGallery.appendChild(thumb);
    });

    // Inicializar el Swiper principal
    const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    effect: 'slide',
    // === CÓDIGO ACTUALIZADO AQUÍ ===
    on: {
        slideChange: function() {
            const activeIndex = this.realIndex;
            const thumbs = document.querySelectorAll('#thumbs-gallery img');
            
            // 1. Quitar la clase 'active' de todas las miniaturas
            thumbs.forEach(thumb => thumb.classList.remove('active'));

            // 2. Añadir la clase 'active' a la miniatura actual
            if (thumbs[activeIndex]) {
                thumbs[activeIndex].classList.add('active');
            }

            // 3. (OPCIONAL) Ajustar el scroll horizontal de las miniaturas
            // para que la imagen activa esté siempre visible.
            const thumbElement = thumbs[activeIndex];
            const container = document.getElementById('thumbs-gallery');
            if (thumbElement && container) {
                // Calcula la posición para centrar la miniatura
                const scrollPos = thumbElement.offsetLeft - (container.offsetWidth / 2) + (thumbElement.offsetWidth / 2);
                container.scrollLeft = scrollPos;
            }
        }
    }
});

    // GLightbox
    const lightbox = GLightbox({ selector: '.glightbox' });

    // Agregar evento de click a las miniaturas
    document.querySelectorAll('#thumbs-gallery img').forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            swiper.slideToLoop(index);
        });
    });
}

// Función principal para cargar datos del auto
function loadAutoData(autoData) {
    // Actualizar meta tags y título
    document.getElementById('page-title').textContent = `${autoData.nombre} ${autoData.ano} | AutoVentas M3`;
    document.getElementById('meta-description').content = autoData.descripcion.split('<br>')[0].replace(/<\/?[^>]+(>|$)/g, "");
    document.getElementById('auto-name').innerHTML = `${autoData.nombre} <span class="auto-year">${autoData.ano}</span>`;

    // Cargar ficha técnica
    const fichaTecnica = document.getElementById('ficha-tecnica');
    fichaTecnica.innerHTML = '';
    autoData.fichaTecnica.forEach(item => {
        const div = document.createElement('div');
        div.className = 'ficha-item';
        div.innerHTML = `<i class="${item.icono}"></i> ${item.texto}`;
        fichaTecnica.appendChild(div);
    });

    // Cargar descripción
    document.getElementById('auto-description').innerHTML = autoData.descripcion;

    // Inicializar la galería DESPUÉS de cargar los datos
    initializeGallery(autoData);
}

// Escuchar el evento cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el Swiper de miniaturas primero
   // Inicializar Swiper solo si los contenedores existen en la página
    if (document.querySelector('.swiper-thumbs-container') && typeof Swiper !== 'undefined') {
        const swiperThumbs = new Swiper('.swiper-thumbs-container', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                768: {
                    slidesPerView: 6,
                }
            },
        });

        const swiperMain = new Swiper('.swiper', {
            loop: true,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            thumbs: {
                swiper: swiperThumbs,
            },
        });
    }

    // Script para el menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');
    
    if (menuToggle && headerNav) {
        menuToggle.addEventListener('click', () => {
            headerNav.classList.toggle('active');
        });
    }
});

