const autoData = {
    // 1. Información principal
    nombre: "Mazda Cx-5 Grand Touring",
    ano: 2016,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
    fichaTecnica: [
         
        { icono: "fa-solid fa-tags", texto: "Q.80,000" },
        { icono: "fa-solid fa-calendar-days", texto: "2016" },
        { icono: "fa-solid fa-car-on", texto: "4x4" },
        { icono: "fa-solid fa-gauge-high", texto: "112,000 millas" }, // Ejemplo de kilometraje
        { icono: "fa-solid fa-tachometer-alt", texto: "Motor SKYACTIV-G de 2.5 litros" },
        { icono: "fa-solid fa-gears", texto: "Transmisión automática" },
        { icono: "fa-solid fa-key", texto: "Llave de presencia (Keyless)" },
        { icono: "fa-solid fa-key", texto: "Botón de encendido (Push Start)" },
        { icono: "fa-solid fa-chair", texto: "Asientos de cuero" },
        { icono: "fa-solid fa-volume-high", texto: "Sistema de sonido Premium Bose" },
        { icono: "fa-solid fa-tv", texto: "Radio de pantalla" },
        { icono: "fa-solid fa-camera", texto: "Cámara de retroceso" },
        { icono: "fa-solid fa-eye", texto: "Sensor de punto ciego en retrovisores" },
        { icono: "fa-solid fa-sun", texto: "Sunroof (Techo corredizo)" },
        { icono: "fa-solid fa-wind", texto: "Aire acondicionado" },
        { icono: "fa-solid fa-exclamation-triangle", texto: "Bolsas de aire completas (falta piloto)" },
    ],
    
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/mazda 2014/01.webp", thumb: "/assets/mazda 2014/thumbs/01.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/mazda 2014/02.webp", thumb: "/assets/mazda 2014/thumbs/02.webp",alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/mazda 2014/03.webp", thumb: "/assets/mazda 2014/thumbs/03.webp",alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/mazda 2014/04.webp", thumb: "/assets/mazda 2014/thumbs/04.webp",alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/mazda 2014/05.webp", thumb: "/assets/mazda 2014/thumbs/05.webp",alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/mazda 2014/07.webp", thumb: "/assets/mazda 2014/thumbs/07.webp",alt: "Jeep Wranfler 2014 foto 7" },
        { src: "/assets/mazda 2014/08.webp", thumb: "/assets/mazda 2014/thumbs/08.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/mazda 2014/09.webp", thumb: "/assets/mazda 2014/thumbs/09.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/mazda 2014/10.webp", thumb: "/assets/mazda 2014/thumbs/10.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/mazda 2014/11.webp", thumb: "/assets/mazda 2014/thumbs/11.webp", alt: "Jeep Wranfler 2014 foto 8" },
        
    ],

    // 4. Descripción del auto
    descripcion:`
        <p>
            ¡Recién ingresada! Ponemos a tu disposición esta elegante <b>Mazda CX-5 Grand Touring 2016</b>, la versión más equipada de su año. Con tracción <b>4x4</b>, es ideal para cualquier terreno, ofreciendo un manejo seguro y cómodo.
        </p>
        <p>
            Esta SUV cuenta con todas las comodidades de una versión premium, incluyendo asientos de cuero, sonido Bose y sunroof, lo que la convierte en la opción perfecta para quienes buscan lujo y funcionalidad.
        </p>
        <p>
            Su historial de motor y caja al 100% te da la tranquilidad que necesitas. ¡Lista para entregar y empezar tu nueva aventura!
        </p>
    `,
    // 5. Estado y Financiamiento
    estado: "Disponible",
    financiamiento: "Cuotas Credomatic | VisaCuotas |¿Piensas en algun Negocio? ¡Contactanos!"
};

// Este código final es crucial para que app.js cargue los datos.
document.addEventListener('DOMContentLoaded', () => {
    loadAutoData(autoData);
});