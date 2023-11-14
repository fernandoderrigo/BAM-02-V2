function animateImageOnClick(clickedImage) {
    // Utilizar anime.js para animar la ampliación de la imagen clicada
    anime({
        targets: clickedImage,
        scale: 2,  // Ampliar la imagen
        duration: 1000,   // Duración de la animación en milisegundos
        easing: 'easeInOutQuad',
    });

    // Desvanecer las demás imágenes
    const allImages = document.querySelectorAll('.imagenes img');
    allImages.forEach(image => {
        if (image !== clickedImage) {
            // Fade Out
            anime({
                targets: image,
                opacity: 0,   // Desvanecer a opacidad 0
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    });

    // Mantener la imagen clicada agrandada durante 5 segundos
    setTimeout(function () {
        // Utilizar anime.js para animar la reducción de la imagen clicada
        anime({
            targets: clickedImage,
            scale: 1,  // Reducir la imagen al tamaño normal
            duration: 1000,
            easing: 'easeInOutQuad',
        });

        // Restablecer la opacidad de las demás imágenes después de un tiempo
        setTimeout(function () {
            allImages.forEach(image => {
                if (image !== clickedImage) {
                    // Fade In
                    anime({
                        targets: image,
                        opacity: 1,   // Restablecer la opacidad a 1
                        duration: 1000,
                        easing: 'easeInOutQuad',
                    });
                }
            });
        }, 500);  // Ajusta este valor según tus necesidades
    }, 3000);  // Mantener agrandada durante 5 segundos (5000 milisegundos)
}
function animateImageOnClick(clickedImage) {
    anime({
        targets: clickedImage,
        scale: 2,
        duration: 1000,
        easing: 'easeInOutQuad',
    });

    const allImages = document.querySelectorAll('.imagenes img');
    allImages.forEach(image => {
        if (image !== clickedImage) {
            anime({
                targets: image,
                opacity: 0,
                duration: 1000,
                easing: 'easeInOutQuad',
            });
        }
    });

    setTimeout(function () {
        anime({
            targets: clickedImage,
            scale: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
        });

        setTimeout(function () {
            allImages.forEach(image => {
                if (image !== clickedImage) {
                    anime({
                        targets: image,
                        opacity: 1,
                        duration: 1000,
                        easing: 'easeInOutQuad',
                    });
                }
            });
        }, 500);
    }, 3000);
}

window.onscroll = function () {
    var header = document.querySelector("header");
    var nav = document.querySelector("nav");

    if (window.pageYOffset > 0) {
        header.classList.add("fixed");
        nav.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
        nav.classList.remove("fixed");
    }
};
