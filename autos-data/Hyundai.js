const autoData = {
    // 1. Información principal
    nombre: "Hyundai TUCSON",
    ano: 2019,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
    fichaTecnica: [
        { icono: "fa-solid fa-tags", texto: "Q. 99,900" },
        { icono: "fa-solid fa-calendar-days", texto: "2019" },
        { icono: "fa-solid fa-gauge-high", texto: "84,000 millas" }, // Ejemplo de kilometraje
        { icono: "fa-solid fa-palette", texto: "Gris" }, // Ejemplo de color

        { icono: "fa-solid fa-gears", texto: "Automática" },
        { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
        { icono: "fa-solid fa-gauge", texto: "Motor 2.0L 4 Cilindros (161 hp)" },
        { icono: "fa-solid fa-car-on", texto: "Tracción Delantera (FWD)" },

        { icono: "fa-solid fa-check-circle", texto: "Sistema de frenado de emergencia" },
        { icono: "fa-solid fa-car-side", texto: "Asistencia mantenimiento de carril" },
        { icono: "fa-solid fa-crosshairs", texto: "Sensor punto ciego en retrovisores" },
        { icono: "fa-solid fa-car-on", texto: "Bolsas de aire (piloto reprogramada)" },

        { icono: "fa-solid fa-camera-retro", texto: "Cámara de retroceso" },
        { icono: "fa-brands fa-apple", texto: "Apple CarPlay" },
        { icono: "fa-brands fa-android", texto: "Android Auto" },
        { icono: "fa-solid fa-snowflake", texto: "Aire Acondicionado" },
        { icono: "fa-solid fa-road", texto: "Modos de conducción" },
        { icono: "fa-solid fa-lightbulb", texto: "Neblineras con luz LED" },
    ],
    
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/tucson/01.webp", thumb: "/assets/tucson/thumbs/01.webp", alt: "Hyundai Tucson 2019 foto 1" },
        { src: "/assets/tucson/02.webp", thumb: "/assets/tucson/thumbs/02.webp",alt: "Hyundai Tucson 2019 foto 2" },
        { src: "/assets/tucson/03.webp", thumb: "/assets/tucson/thumbs/03.webp",alt: "Hyundai Tucson 2019 foto 3" },
        { src: "/assets/tucson/04.webp", thumb: "/assets/tucson/thumbs/04.webp",alt: "Hyundai Tucson 2019 foto 4" },
        { src: "/assets/tucson/05.webp", thumb: "/assets/tucson/thumbs/05.webp",alt: "Hyundai Tucson 2019 foto 5" },
        { src: "/assets/tucson/06.webp", thumb: "/assets/tucson/thumbs/06.webp",alt: "Hyundai Tucson 2019 foto 6" },
        { src: "/assets/tucson/07.webp", thumb: "/assets/tucson/thumbs/07.webp",alt: "Hyundai Tucson 2019 foto 7" },
        { src: "/assets/tucson/08.webp", thumb: "/assets/tucson/thumbs/08.webp", alt: "Hyundai Tucson 2019 foto 8" },
        { src: "/assets/tucson/09.webp", thumb: "/assets/tucson/thumbs/09.webp",alt: "Hyundai Tucson 2019 foto 9" },
    ],

    // 4. Descripción del auto
    descripcion: `
        <p>Vehículo importado US, listo para traspaso. Equipado con un potente motor 2.0L y transmisión automática. Disfruta de la seguridad de su sistema de frenado de emergencia y asistencia de carril, así como de la comodidad de su pantalla con Apple CarPlay y Android Auto. ¡Una excelente oportunidad para tu próximo viaje!</p>
    `,

    // 5. Estado y Financiamiento
    estado: "Disponible",
    financiamiento: "Cuotas Credomatic | VisaCuotas |¿Piensas en algun Negocio? ¡Contactanos!"
};

// Este código final es crucial para que app.js cargue los datos.
document.addEventListener('DOMContentLoaded', () => {
    loadAutoData(autoData);
});