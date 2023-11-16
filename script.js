document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("show-content");

    // Función para animar una imagen al hacer clic
    function animateImageOnClick(clickedImage) {
        // Escala la imagen clickeada
        anime({
            targets: clickedImage,
            scale: 2,
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: function () {
                // Establece un índice de apilamiento alto para la imagen clickeada
                clickedImage.style.zIndex = 2;

                // Después de completar la escala, oculta las demás imágenes
                const allImages = document.querySelectorAll('.imagenes img');
                allImages.forEach(image => {
                    if (image !== clickedImage) {
                        anime({
                            targets: image,
                            opacity: 0,
                            duration: 500, // Ajusta la velocidad de desvanecimiento
                            easing: 'easeInOutQuad',
                        });
                    }
                });

                // Después de 3 segundos, revierte la escala de la imagen clickeada y muestra nuevamente las otras imágenes
                setTimeout(function () {
                    anime({
                        targets: clickedImage,
                        scale: 1,
                        duration: 1000,
                        easing: 'easeInOutQuad',
                        complete: function () {
                            // Restaura el índice de apilamiento original de las demás imágenes
                            allImages.forEach(image => {
                                if (image !== clickedImage) {
                                    image.style.zIndex = 1;
                                    anime({
                                        targets: image,
                                        opacity: 1,
                                        duration: 500, // Ajusta la velocidad de aparición
                                        easing: 'easeInOutQuad',
                                    });
                                }
                            });
                        }
                    });
                }, 3000);
            }
        });
    }

    // Agrega un event listener a todas las imágenes dentro de la clase 'imagenes'
    const allImages = document.querySelectorAll('.imagenes img');
    allImages.forEach(image => {
        image.addEventListener('click', function () {
            animateImageOnClick(this);
        });
    });
});
