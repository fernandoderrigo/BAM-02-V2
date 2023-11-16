// Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {

    // Agrega la clase 'show-content' al elemento body
    document.body.classList.add('show-content');

    // Función para animar una imagen al hacer clic
    function animateImageOnClick(clickedImage) {
        // Escala la imagen clickeada
        anime({
            targets: clickedImage,
            scale: 2,
            duration: 1000,
            easing: 'easeInOutQuad',
        });

        // Obtiene todas las imágenes y desvanece las que no fueron clickeadas
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

        // Después de 3 segundos, revierte la escala de la imagen clickeada y muestra nuevamente las otras imágenes
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

    // Maneja el evento de desplazamiento de la ventana para agregar o quitar la clase 'fixed' del encabezado y la barra de navegación
    window.onscroll = function () {
        var header = document.querySelector('header');
        var nav = document.querySelector('nav');

        if (window.pageYOffset > 0) {
            header.classList.add('fixed');
            nav.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
            nav.classList.remove('fixed');
        }
    };

    // Obtiene los elementos del formulario y del mensaje de éxito
    var form = document.getElementById('my-form');
    var successMessage = document.getElementById('success-message');

    // Maneja la presentación del formulario
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById('my-form-status');
        var data = new FormData(event.target);

        // Envía los datos del formulario usando la API Fetch
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: 'application/json',
            },
        })
            .then(response => {
                if (response.ok) {
                    // Muestra el mensaje de éxito y reinicia el formulario
                    status.innerHTML = '¡Mensaje Enviado!';
                    form.reset();
                    // Oculta el formulario después de una presentación exitosa
                    form.style.display = 'none';
                    // Muestra el mensaje de éxito
                    successMessage.style.display = 'block';
                } else {
                    // Muestra el mensaje de error si la presentación falla
                    response.json().then(data => {
                        if (Object.hasOwnProperty(data, 'errors')) {
                            status.innerHTML = data['errors'].map(error => error['message']).join(', ');
                        } else {
                            status.innerHTML = '¡Ups! Hubo un problema al enviar tu formulario';
                        }
                    });
                }
            })
            .catch(error => {
                // Muestra el mensaje de error si hay un problema con la presentación
                status.innerHTML = '¡Ups! Hubo un problema al enviar tu formulario';
            });
    }

    // Agrega un event listener al formulario para manejar su presentación
    form.addEventListener('submit', handleSubmit);
});
