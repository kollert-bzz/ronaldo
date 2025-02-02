document.addEventListener("DOMContentLoaded", function() {
    const instagramLink = document.querySelector('#instagram');
    if (instagramLink) {
        const instagramImg = instagramLink.querySelector('img');

        instagramLink.addEventListener('mouseover', function () {
            instagramImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png';
        });

        instagramLink.addEventListener('mouseout', function () {
            instagramImg.src = 'https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-black-glyph.png';
        });
    }

    const twitterLink = document.querySelector('#twitter');
    if (twitterLink) {
        const twitterImg = twitterLink.querySelector('img');

        twitterLink.addEventListener('mouseover', function () {
            twitterImg.src = 'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png';
        });

        twitterLink.addEventListener('mouseout', function () {
            twitterImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/X_logo_2023_original.svg/2048px-X_logo_2023_original.svg.png';
        });
    }

    const facebookLink = document.querySelector('#facebook');
    if (facebookLink) {
        const facebookImg = facebookLink.querySelector('img');

        facebookLink.addEventListener('mouseover', function () {
            facebookImg.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg';
        });

        facebookLink.addEventListener('mouseout', function () {
            facebookImg.src = 'https://allfacebook.de/wp-content/uploads/2020/02/f_logo_RGB-Black_1024.png';
        });
    }

    const cr7_websiteLink = document.querySelector('#cr7_website');
    if (cr7_websiteLink) {
        const cr7_websiteImg = cr7_websiteLink.querySelector('img');

        cr7_websiteLink.addEventListener('mouseover', function () {
            cr7_websiteImg.src = 'https://static.vecteezy.com/system/resources/previews/010/994/486/non_2x/cr7-symbol-logo-white-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg';
        });

        cr7_websiteLink.addEventListener('mouseout', function () {
            cr7_websiteImg.src = 'https://static.vecteezy.com/system/resources/previews/010/994/282/non_2x/cr7-logo-symbol-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg';
        });
    }

    const logoLink = document.querySelector('.logo-link');
    const logoImg = document.querySelector('.logo');

    if (window.location.pathname === '/ronaldo/index.html') {
        logoImg.src = 'img/logo_navbar_orange.jpg';
    }

    if (logoLink) {
        logoLink.addEventListener('mouseover', function () {
            if (window.location.pathname === '/ronaldo/index.html') {
                logoImg.src = 'img/logo_navbar.jpg';
            } else {
                logoImg.src = 'img/logo_navbar_orange.jpg';
            }
        });

        logoLink.addEventListener('mouseout', function () {
            if (window.location.pathname === '/ronaldo/index.html') {
                logoImg.src = 'img/logo_navbar_orange.jpg';
            } else {
                logoImg.src = 'img/logo_navbar.jpg';
            }
        });
    }

    var slides = $('.slide');
    var currentSlide = 0;

    function showSlide(n) {
        slides.removeClass('active');
        slides.eq(n).addClass('active');
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);



});
