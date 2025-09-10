const autoData = {
    // 1. Información principal
    nombre: "Jeep Wrangler Sport",
    ano: 2014,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
    fichaTecnica: [
        { icono: "fa-solid fa-tags", texto: "Q. 145,000" },
        { icono: "fa-solid fa-calendar-days", texto: "2014" },
        { icono: "fa-solid fa-gauge-high", texto: "140,000 millas" }, // Ejemplo de kilometraje
        { icono: "fa-solid fa-palette", texto: "Gris" }, // Ejemplo de color

        { icono: "fa-solid fa-gears", texto: "Automática" },
        { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
        { icono: "fa-solid fa-gauge", texto: "Motor PENTASTAR de 3.6 litros V6" },
        { icono: "fa-solid fa-car-on", texto: "Transmisión 4x4" },

        { icono: "fa-solid fa-check-circle", texto: "6 Cilindros" },
        { icono: "fa-solid fa-car-side", texto: "Timón Asistido Hidráulico" },
        { icono: "fa-solid fa-crosshairs", texto: "Camara de Retroceso" },
        { icono: "fa-solid fa-users", texto: "Capacidad para 5 pasajeros" },

        { icono: "fa-solid fa-tools", texto: "Suspension Fox" },
        { icono: "fa-brands fa-apple", texto: "Apple CarPlay" },
        { icono: "fa-brands fa-android", texto: "Sonido premium con Pantalla Android" },
        { icono: "fa-solid fa-snowflake", texto: "Aire Acondicionado" },
        { icono: "fa-solid fa-lightbulb", texto: "Neblineras con Interruptores individuales" },
        { icono: "fa-solid fa-lightbulb", texto: "Techo y puertas Desmontables" },
    ],
    
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/Jeep Wrangler/jeep01.webp", thumb: "/assets/Jeep Wrangler/thumbs/jeep01.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/Jeep Wrangler/jeep02.webp", thumb: "/assets/Jeep Wrangler/thumbs/jeep02.webp",alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/Jeep Wrangler/jeep03.webp", thumb: "/assets/Jeep Wrangler/thumbs/jeep03.webp",alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/Jeep Wrangler/jeep04.webp", thumb: "/assets/Jeep Wrangler/thumbs/jeep04.webp",alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/Jeep Wrangler/jeep05.webp", thumb: "/assets/Jeep Wrangler/thumbs/jeep05.webp",alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/Jeep Wrangler/jeep06.webp", thumb: "/assets/Jeep Wrangler/thumbs/jeep06.webp",alt: "Jeep Wranfler 2014 foto 6" },
        { src: "/assets/Jeep Wrangler/jeep07.webp", thumb: "/assets/Jeep Wrangler/thumbs/jeep07.webp",alt: "Jeep Wranfler 2014 foto 7" },
        { src: "/assets/Jeep Wrangler/jeep08.webp", thumb: "/assets/Jeep Wrangler/thumbs/jeep08.webp", alt: "Jeep Wranfler 2014 foto 8" },
        
    ],

    // 4. Descripción del auto
    descripcion: `
        <p>Este Jeep Wrangler Sport 2014 es un ícono de aventura, con capacidad todoterreno inigualable. Ideal para quienes buscan un vehículo robusto y versátil para explorar. Equipado con un potente motor de 3.6 litros y transmisión 4x4, este modelo ofrece una experiencia de manejo única. Sus techos y puertas desmontables lo convierten en el compañero perfecto para cualquier aventura al aire libre, sin sacrificar comodidad ni seguridad</p>
    `,

    // 5. Estado y Financiamiento
    estado: "Disponible",
    financiamiento: "Cuotas Credomatic | VisaCuotas |¿Piensas en algun Negocio? ¡Contactanos!"
};

// Este código final es crucial para que app.js cargue los datos.
document.addEventListener('DOMContentLoaded', () => {
    loadAutoData(autoData);
});