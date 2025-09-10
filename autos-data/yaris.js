const autoData = {
    // 1. Información principal
    nombre: "Toyota Yaris",
    ano: 2008,
    
    // 2. Ficha Técnicaedgar miranda autiventasm3autoventasm3
    // Cada objeto en este array es una línea de la ficha.
    fichaTecnica: [
         { icono: "fa-solid fa-tags", texto: "Q.37,500 " },
        { icono: "fa-solid fa-calendar-days", texto: "2008" },
        { icono: "fa-solid fa-palette", texto: "Gris" },
        { icono: "fa-solid fa-gears", texto: "Automático" },
        { icono: "fa-solid fa-gas-pump", texto: "Gasolina" },
        { icono: "fa-solid fa-tachometer-alt", texto: "Motor 1.5L" },
        { icono: "fa-solid fa-gear", texto: "4 Cilindros" },
        { icono: "fa-solid fa-wind", texto: "Aire acondicionado" },
        { icono: "fa-solid fa-window-minimize", texto: "Vidrios manuales" },
        { icono: "fa-solid fa-road", texto: "Motor y caja en buen estado" },
        { icono: "fa-solid fa-car-side", texto: "Bien ajustado" },
        { icono: "fa-solid fa-paint-brush", texto: "Pintura nítida" },
        { icono: "fa-solid fa-check", texto: "Cero luz de check y cero fugas" },
        { icono: "fa-solid fa-clipboard-check", texto: "Papeles en orden, listo para traspaso" },
        { icono: "fa-solid fa-car", texto: "Vehículo de uso personal" },
        
    ],
    
    // 3. Imágenes para la galería
    // Asegúrate de que las rutas a las imágenes sean correctas
    imagenes: [
        { src: "/assets/yaris/01.webp", thumb: "/assets/yaris/thumbs/001.webp", alt: "Jeep Wranfler 2014 foto 1" },
        { src: "/assets/yaris/02.webp", thumb: "/assets/yaris/thumbs/002.webp",alt: "Jeep Wranfler 2014 foto 2" },
        { src: "/assets/yaris/03.webp", thumb: "/assets/yaris/thumbs/003.webp",alt: "Jeep Wranfler 2014 foto 3" },
        { src: "/assets/yaris/04.webp", thumb: "/assets/yaris/thumbs/004.webp",alt: "Jeep Wranfler 2014 foto 4" },
        { src: "/assets/yaris/05.webp", thumb: "/assets/yaris/thumbs/005.webp",alt: "Jeep Wranfler 2014 foto 5" },
        { src: "/assets/yaris/06.webp", thumb: "/assets/yaris/thumbs/006.webp",alt: "Jeep Wranfler 2014 foto 6" },
        { src: "/assets/yaris/07.webp", thumb: "/assets/yaris/thumbs/007.webp",alt: "Jeep Wranfler 2014 foto 7" },
        { src: "/assets/yaris/08.webp", thumb: "/assets/yaris/thumbs/008.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/yaris/09.webp", thumb: "/assets/yaris/thumbs/009.webp", alt: "Jeep Wranfler 2014 foto 8" },
        { src: "/assets/yaris/10.webp", thumb: "/assets/yaris/thumbs/010.webp", alt: "Jeep Wranfler 2014 foto 8" },
        
    ],

    // 4. Descripción del auto
    descripcion: `
        <p>
            ¡En venta! Este <b>Toyota Yaris 2008</b> está en excelente estado y listo para su nuevo dueño. Ideal para la ciudad por su tamaño compacto y su motor de 1.5 litros, que garantiza un consumo de gasolina muy eficiente.
        </p>
        <p>
            Con su caja de cambios automática, el manejo es suave y cómodo. La pintura está nítida y la tapicería de tela está en perfectas condiciones. El vehículo no presenta fugas ni luces de check encendidas, y sus papeles están en orden para un traspaso inmediato. Un auto confiable y económico para el uso diario.
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