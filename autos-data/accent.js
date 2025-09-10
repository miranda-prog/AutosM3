const autoData = {
    // 1. Información principal
    nombre: "Hyundai Accent GLS",
    ano: 2012,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
    fichaTecnica: [
       { icono: "fa-solid fa-tags", texto: "Q.40,000" },
        { icono: "fa-solid fa-calendar-days", texto: "2012" },
        { icono: "fa-solid fa-palette", texto: "Blanco" },
        { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
        { icono: "fa-solid fa-gears", texto: "Automático" },
        { icono: "fa-solid fa-tachometer-alt", texto: "Motor 1.6L" },
        { icono: "fa-solid fa-car-on", texto: "Bolsas de aire completas - cortina piloto" },
        { icono: "fa-solid fa-fan", texto: "Aire acondicionado" },
        { icono: "fa-solid fa-chair", texto: "Tapicería nítida" },
        { icono: "fa-solid fa-window-maximize", texto: "Vidrios eléctricos" },
        { icono: "fa-solid fa-road", texto: "Motor y caja al 100" },
       ],
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/accent/01.webp", thumb:  "/assets/accent/thumbs/01.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/accent/02.webp", thumb:  "/assets/accent/thumbs/02.webp",alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/accent/03.webp", thumb:  "/assets/accent/thumbs/03.webp",alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/accent/04.webp", thumb:  "/assets/accent/thumbs/04.webp",alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/accent/05.webp", thumb:  "/assets/accent/thumbs/05.webp",alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/accent/06.webp", thumb:  "/assets/accent/thumbs/06.webp",alt: "Jeep Wranfler 2014 foto 6" },
        { src: "/assets/accent/07.webp", thumb:  "/assets/accent/thumbs/07.webp",alt: "Jeep Wranfler 2014 foto 7" },
        { src: "/assets/accent/08.webp", thumb:  "/assets/accent/thumbs/08.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/accent/09.webp", thumb:  "/assets/accent/thumbs/09.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/accent/10.webp", thumb:  "/assets/accent/thumbs/10.webp", alt: "Jeep Wranfler 2014 foto 8" },
       
    ],

    // 4. Descripción del auto
    descripcion:`
        <p>
            ¡Recién ingresado de Estados Unidos! Este <b>Hyundai Accent GLS 2012</b> es el vehículo perfecto para la ciudad, combinando un diseño compacto con un rendimiento excepcional. Su motor de <b>1.6 litros</b> te ofrece un excelente ahorro de gasolina, mientras que su transmisión automática asegura un manejo suave y sin esfuerzo.
        </p>
        <p>
            A pesar de ser un auto compacto, cuenta con una <b>tapicería nítida</b>, vidrios eléctricos y un sistema de aire acondicionado que enfría perfectamente para un viaje cómodo. Su motor y caja están al 100%, garantizando un vehículo listo para conducir.
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