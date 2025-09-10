const autoData = {
    // 1. Información principal
    nombre: "Toyota Rav-4 ",
    ano: 2011,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
    fichaTecnica: [
       { icono: "fa-solid fa-tags", texto: "Q.70,000" },
        { icono: "fa-solid fa-calendar-days", texto: "2011" },
        { icono: "fa-solid fa-palette", texto: "Gris" },
        { icono: "fa-solid fa-car-on", texto: "4x4" },
        { icono: "fa-solid fa-gears", texto: "Transmisión automática" },
        { icono: "fa-solid fa-tachometer-alt", texto: "Motor 2.5L de 4 cilindros" },
        { icono: "fa-solid fa-gauge", texto: "Motor y caja al 100" },
        { icono: "fa-solid fa-sun", texto: "Sunroof (Techo corredizo)" },
        { icono: "fa-solid fa-wind", texto: "Aire acondicionado frío" },
        { icono: "fa-solid fa-car-on", texto: "Bolsas de aire completas" },
        { icono: "fa-solid fa-window-maximize", texto: "Vidrios eléctricos" },
        { icono: "fa-solid fa-car-side", texto: "Timón asistido hidráulicamente" },
    ],
    
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/rav-4/01.webp", thumb: "/assets/rav-4/thumbs/01.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/rav-4/02.webp", thumb: "/assets/rav-4/thumbs/02.webp",alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/rav-4/03.webp", thumb: "/assets/rav-4/thumbs/03.webp",alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/rav-4/04.webp", thumb: "/assets/rav-4/thumbs/04.webp",alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/rav-4/05.webp", thumb: "/assets/rav-4/thumbs/05.webp",alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/rav-4/06.webp", thumb: "/assets/rav-4/thumbs/06.webp",alt: "Jeep Wranfler 2014 foto 6" },
        { src: "/assets/rav-4/07.webp", thumb: "/assets/rav-4/thumbs/07.webp",alt: "Jeep Wranfler 2014 foto 7" },
        { src: "/assets/rav-4/08.webp", thumb: "/assets/rav-4/thumbs/08.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/rav-4/09.webp", thumb: "/assets/rav-4/thumbs/09.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/rav-4/10.webp", thumb: "/assets/rav-4/thumbs/10.webp", alt: "Jeep Wranfler 2014 foto 8" },
        
        
    ],

    // 4. Descripción del auto
    descripcion:
        `
        <p>
            ¡Recién ingresada de Estados Unidos! Te presentamos esta confiable <b>Toyota RAV4 2011</b>, la SUV compacta perfecta que combina un diseño práctico con la seguridad y robustez que caracterizan a la marca.
        </p>
        <p>
            Su tracción <b>4x4</b> la hace ideal para la ciudad y para escapar a la aventura. Equipada con motor y caja en perfecto estado, aire acondicionado que enfría al 100%, vidrios eléctricos y sunroof, esta RAV4 está lista para cualquier viaje.
        </p>
        <p>
            Con <b>bolsas de aire completas</b>, ofrece una capa adicional de seguridad para ti y tu familia. ¡Una excelente opción que no te puedes perder!
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