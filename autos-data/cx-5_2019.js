const autoData = {
    // 1. Información principal
    nombre: "Mazda Cx-5 Sport",
    ano: 2019,
    
    // 2. Ficha Técnica
    // Cada objeto en este array es una línea de la ficha.
   fichaTecnica: [
    { icono: "fa-solid fa-tags", texto: "Q.105,000" },
    { icono: "fa-solid fa-calendar-days", texto: "2019" },
    { icono: "fa-solid fa-gauge-high", texto: "90,000 mi" },
    { icono: "fa-solid fa-palette", texto: "Blanco" },
    { icono: "fa-solid fa-gears", texto: "Automática" },
    { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
    { icono: "fa-solid fa-gauge", texto: "SKYACTIV-G de 2.5 litros (2,488 cm³)" },
    { icono: "fa-solid fa-gear", texto: "4 Cilindros" },
    { icono: "fa-solid fa-chair", texto: "5 pasajeros" },
    { icono: "fa-solid fa-volume-high", texto: "Sonido Premium Bose" },
    { icono: "fa-brands fa-android", texto: "Android Auto" },
    { icono: "fa-brands fa-apple", texto: "Carplay" },
    { icono: "fa-solid fa-sun", texto: "Sunroof (Techo corredizo)" },
    { icono: "fa-solid fa-door-open", texto: "4 puertas" },
    { icono: "fa-solid fa-car-on", texto: "Bolsas de Aire Completas" },
],
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/mazda 2019/01.webp", thumb: "/assets/mazda 2019/thumbs/01.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/mazda 2019/02.webp", thumb: "/assets/mazda 2019/thumbs/02.webp",alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/mazda 2019/03.webp", thumb: "/assets/mazda 2019/thumbs/03.webp",alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/mazda 2019/04.webp", thumb: "/assets/mazda 2019/thumbs/04.webp",alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/mazda 2019/05.webp", thumb: "/assets/mazda 2019/thumbs/05.webp",alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/mazda 2019/06.webp", thumb: "/assets/mazda 2019/thumbs/06.webp",alt: "Jeep Wranfler 2014 foto 6" },
        { src: "/assets/mazda 2019/07.webp", thumb: "/assets/mazda 2019/thumbs/07.webp",alt: "Jeep Wranfler 2014 foto 7" },
        { src: "/assets/mazda 2019/08.webp", thumb: "/assets/mazda 2019/thumbs/08.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/mazda 2019/09.webp", thumb: "/assets/mazda 2019/thumbs/09.webp", alt: "Jeep Wranfler 2014 foto 8" },
        
        
    ],

    // 4. Descripción del auto
    descripcion: `
         Equipada con un motor <b>SKYACTIV-G </b>que ofrece una excelente eficiencia de 
                combustible sin sacrificar potencia, garantizando un manejo suave y responsivo
                 en cualquier condición. <br> <br> <b>Confort y Tecnología:</b> El interior cuenta con acabados
                  de alta calidad, asientos de cuero y un sistema de infoentretenimiento de fácil uso.
                   El techo corredizo eléctrico te permite disfrutar de la vista y del aire fresco. <br> <br>


                   
                    <b>Seguridad:</b> Incluye características de seguridad avanzadas, como sensores de
                     estacionamiento y un sistema de frenado asistido, que te brindan tranquilidad
                      en cada trayecto.
    `,

    // 5. Estado y Financiamiento
    estado: "Disponible",
    financiamiento: "Cuotas Credomatic | VisaCuotas |¿Piensas en algun Negocio? ¡Contactanos!"
};

// Este código final es crucial para que app.js cargue los datos.
document.addEventListener('DOMContentLoaded', () => {
    loadAutoData(autoData);
});