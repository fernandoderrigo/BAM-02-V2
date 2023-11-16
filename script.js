document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('show-content');

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

    var form = document.getElementById('my-form');
    var successMessage = document.getElementById('success-message');

    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById('my-form-status');
        var data = new FormData(event.target);

        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: 'application/json',
            },
        })
            .then(response => {
                if (response.ok) {
                    status.innerHTML = '¡Mensaje Enviado!';
                    form.reset();
                    // Ocultar el formulario después de enviarlo con éxito
                    form.style.display = 'none';
                    // Mostrar el mensaje de éxito
                    successMessage.style.display = 'block';
                } else {
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
                status.innerHTML = '¡Ups! Hubo un problema al enviar tu formulario';
            });
    }

    form.addEventListener('submit', handleSubmit);
});
