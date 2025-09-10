const autoData = {
    // 1. Información principal
    nombre: "Chevrolet Captiva",
    ano: 2022,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
    fichaTecnica: [
            { icono: "fa-solid fa-tags", texto: "Q.115,000" },
        { icono: "fa-solid fa-calendar-days", texto: "2022" },
        { icono: "fa-solid fa-gauge-high", texto: "102,196 km" },
        { icono: "fa-solid fa-palette", texto: "Blanco" },
        { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
        { icono: "fa-solid fa-gears", texto: "Automática" },
        { icono: "fa-solid fa-gauge", texto: "Motor 1.5L Turbo" },
        { icono: "fa-solid fa-gear", texto: "4 Cilindros" },
        { icono: "fa-solid fa-location-arrow", texto: "Nacional de agencia" },
        { icono: "fa-solid fa-chair", texto: "3 Filas de asientos Full Cuero" },
        { icono: "fa-solid fa-car-on", texto: "Bolsas de aire" },
        { icono: "fa-solid fa-car-battery", texto: "Cierre centralizado" },
        { icono: "fa-solid fa-key", texto: "Llave de encendido" },
        { icono: "fa-solid fa-car-side", texto: "Timón multifuncional" },
        { icono: "fa-solid fa-volume-high", texto: "Pantalla táctil" },
        { icono: "fa-solid fa-crosshairs", texto: "Cámara de retroceso" },
        { icono: "fa-solid fa-check", texto: "Sensores de parqueo" },
        { icono: "fa-solid fa-lightbulb", texto: "Luces LED" },
    ],
    
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/captiva/01.webp", thumb: "/assets/captiva/thumbs/01.webp", alt: "Hyundai Tucson 2019 foto 1" },
        { src: "/assets/captiva/03.webp", thumb: "/assets/captiva/thumbs/03.webp",alt: "Hyundai Tucson 2019 foto 3" },
        { src: "/assets/captiva/05.webp", thumb: "/assets/captiva/thumbs/05.webp",alt: "Hyundai Tucson 2019 foto 5" },
        { src: "/assets/captiva/06.webp", thumb: "/assets/captiva/thumbs/06.webp",alt: "Hyundai Tucson 2019 foto 6" },
        { src: "/assets/captiva/04.webp", thumb: "/assets/captiva/thumbs/04.webp",alt: "Hyundai Tucson 2019 foto 5" },
        { src: "/assets/captiva/07.webp", thumb: "/assets/captiva/thumbs/07.webp",alt: "Hyundai Tucson 2019 foto 7" },
        { src: "/assets/captiva/02.webp", thumb: "/assets/captiva/thumbs/02.webp", alt: "Hyundai Tucson 2019 foto 1" },
        { src: "/assets/captiva/08.webp", thumb: "/assets/captiva/thumbs/08.webp", alt: "Hyundai Tucson 2019 foto 8" },
        { src: "/assets/captiva/09.webp", thumb: "/assets/captiva/thumbs/09.webp",alt: "Hyundai Tucson 2019 foto 9" },
    ],

    // 4. Descripción del auto
    descripcion: `
       <p>
            ¡En venta! Elegante y versátil <b>Chevrolet Captiva LT 2022</b>, en excelentes condiciones. Esta SUV familiar cuenta con un eficiente motor <b>1.5 Turbo</b> que ofrece una combinación ideal de potencia y bajo consumo.
        </p>
        <p>
            Vehículo <b>nacional de agencia</b>, no de subasta, con un historial de servicios al día que garantizan su perfecto estado. Un diseño moderno y espacioso, perfecto para la familia y tus aventuras diarias.
        </p>
        <p>
            ¡Contáctanos para más información o para programar una visita!
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