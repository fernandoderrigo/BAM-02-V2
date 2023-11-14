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
