const autoData = {
    // 1. Información principal
    nombre: "Ktm Duke 390 ",
    ano: 2015,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
    fichaTecnica: [
        { icono: "fa-solid fa-tags", texto: "Q.28,000" },
        { icono: "fa-solid fa-calendar-days", texto: "2015" },
        { icono: "fa-solid fa-gauge-high", texto: "38,028" },
        { icono: "fa-solid fa-motorcycle", texto: "Motocicleta tipo Naked" },
        { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
        { icono: "fa-solid fa-tachometer-alt", texto: "Motor monocilíndrico de 373cc" },
        { icono: "fa-solid fa-horse", texto: "44 caballos de fuerza" },
        { icono: "fa-solid fa-cogs", texto: "6 velocidades" },
        { icono: "fa-solid fa-car-side", texto: "Frenos ABS" },
        { icono: "fa-solid fa-road", texto: "Peso de 139 kg" },
        { icono: "fa-solid fa-lightbulb", texto: "Luces Led" },
        { icono: "fa-solid fa-lock", texto: "Sliders" },
        { icono: "fa-solid fa-check", texto: "Excelente Estado" },
        { icono: "fa-solid fa-clipboard-check", texto: "Papeles en orden, lista para traspaso" },
      



    ],
    
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/Ktm/01.webp", thumb: "/assets/ktm/thumbs/1.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/Ktm/02.webp", thumb: "/assets/ktm/thumbs/2.webp",alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/Ktm/03.webp", thumb: "/assets/ktm/thumbs/3.webp",alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/Ktm/04.webp", thumb: "/assets/ktm/thumbs/4.webp",alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/Ktm/05.webp", thumb: "/assets/ktm/thumbs/5.webp",alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/Ktm/06.webp", thumb: "/assets/ktm/thumbs/6.webp",alt: "Jeep Wranfler 2014 foto 6" },
        { src: "/assets/Ktm/07.webp", thumb: "/assets/ktm/thumbs/7.webp",alt: "Jeep Wranfler 2014 foto 7" },
        
    ],

    // 4. Descripción del auto
    descripcion:  `
        <p>
            ¡En venta! Conoce la <b>KTM Duke 390 2015</b>, una motocicleta deportiva que te ofrece una experiencia de conducción emocionante y ágil. Su motor monocilíndrico de alto rendimiento y su chasis ultraligero la convierten en la opción ideal tanto para el tráfico de la ciudad como para la carretera.
        </p>
        <p>
            Mecánicamente en excelente estado y con todos sus papeles en orden, esta moto está lista para ser tuya y disfrutar de cada viaje. Su diseño agresivo y su capacidad de respuesta inmediata te harán destacar en cualquier camino.
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