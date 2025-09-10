const autoData = {
    // 1. Información principal
    nombre: "Honda Civic ",
    ano: 2010,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
    fichaTecnica: [
        { icono: "fa-solid fa-tags", texto: "Q.36,500 " },
        { icono: "fa-solid fa-calendar-days", texto: "2010" },
        { icono: "fa-solid fa-gauge-high", texto: "155,072 millas" },
        { icono: "fa-solid fa-palette", texto: "Gris" },
        { icono: "fa-solid fa-gears", texto: "Automático" },
        { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
        { icono: "fa-solid fa-tachometer-alt", texto: "Motor 1.8L" },
        { icono: "fa-solid fa-gear", texto: "4 Cilindros" },
        { icono: "fa-solid fa-car-on", texto: "Bolsas de aire completas - cortina" },
        { icono: "fa-solid fa-fan", texto: "Aire acondicionado" },
        { icono: "fa-solid fa-chair", texto: "Tapicería nítida" },
        { icono: "fa-solid fa-car-side", texto: "Mandos al timón" },
        { icono: "fa-solid fa-window-maximize", texto: "Vidrios eléctricos" },
        { icono: "fa-solid fa-road", texto: "Retrovisores eléctricos" },
        { icono: "fa-solid fa-lock", texto: "Cerradura central" },
        { icono: "fa-solid fa-check", texto: "Cero luz de check" },
        { icono: "fa-solid fa-clipboard-check", texto: "Papeles en orden, listo para traspaso" },
        { icono: "fa-solid fa-music", texto: "Radio con Bluetooth y entrada auxiliar" },
        { icono: "fa-solid fa-phone", texto: "Manos libres" },
        { icono: "fa-solid fa-snowflake", texto: "Aire acondicionado frío" },
   
    ],
    
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/civic/01.webp", thumb: "/assets/civic/thumbs/1.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/civic/02.webp", thumb: "/assets/civic/thumbs/2.webp",alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/civic/03.webp", thumb: "/assets/civic/thumbs/3.webp",alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/civic/04.webp", thumb: "/assets/civic/thumbs/4.webp",alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/civic/05.webp", thumb: "/assets/civic/thumbs/5.webp",alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/civic/06.webp", thumb: "/assets/civic/thumbs/6.webp",alt: "Jeep Wranfler 2014 foto 6" },
        { src: "/assets/civic/07.webp", thumb: "/assets/civic/thumbs/7.webp",alt: "Jeep Wranfler 2014 foto 7" },
        { src: "/assets/civic/08.webp", thumb: "/assets/civic/thumbs/8.webp", alt: "Jeep Wranfler 2014 foto 8" },
         { src: "/assets/civic/09.webp", thumb: "/assets/civic/thumbs/9.webp", alt: "Jeep Wranfler 2014 foto 8" },
          { src: "/assets/civic/10.webp", thumb: "/assets/civic/thumbs/010.webp", alt: "Jeep Wranfler 2014 foto 8" },
           { src: "/assets/civic/11.webp", thumb: "/assets/civic/thumbs/011.webp", alt: "Jeep Wranfler 2014 foto 8" },
            { src: "/assets/civic/12.webp", thumb: "/assets/civic/thumbs/012.webp", alt: "Jeep Wranfler 2014 foto 8" },
        
    ],

    // 4. Descripción del auto
    descripcion: `
        <p>
            ¡Recién ingresado! Te presentamos este confiable <b>Honda Civic 2010</b>, un sedán que destaca por su eficiencia, bajo mantenimiento y excelente rendimiento en la ciudad. Es un vehículo popular por su fiabilidad y comodidad.
        </p>
        <p>
            Cuenta con un eficiente motor de <b>1.8 litros</b> y transmisión automática para un manejo suave y sin complicaciones. La pintura y la tapicería están en perfectas condiciones, y el vehículo está bien ajustado, sin luces de check engine encendidas. Además, sus papeles están listos para un traspaso rápido y sin problemas.
        </p>
        <p>
            Equipado con mandos al timón, vidrios y retrovisores eléctricos, y aire acondicionado, este Civic está listo para ser tu compañero diario.
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