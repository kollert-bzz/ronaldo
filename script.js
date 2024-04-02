document.addEventListener("DOMContentLoaded", function() {
    const instagramLink = document.querySelector('#instagram');
    const instagramImg = instagramLink.querySelector('img');

    instagramLink.addEventListener('mouseover', function() {
        instagramImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png';
    });

    instagramLink.addEventListener('mouseout', function() {
        instagramImg.src = 'https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-black-glyph.png';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const twitterLink = document.querySelector('#twitter');
    const twitterImg = twitterLink.querySelector('img');

    twitterLink.addEventListener('mouseover', function() {
        twitterImg.src = 'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png';
    });

    twitterLink.addEventListener('mouseout', function() {
        twitterImg.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/X_logo_2023_original.svg/2048px-X_logo_2023_original.svg.png';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const facebookLink = document.querySelector('#facebook');
    const facebookImg = facebookLink.querySelector('img');

    facebookLink.addEventListener('mouseover', function() {
        facebookImg.src = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg';
    });

    facebookLink.addEventListener('mouseout', function() {
        facebookImg.src = 'https://allfacebook.de/wp-content/uploads/2020/02/f_logo_RGB-Black_1024.png';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cr7_websiteLink = document.querySelector('#cr7_website');
    const cr7_websiteImg = cr7_websiteLink.querySelector('img');

    cr7_websiteLink.addEventListener('mouseover', function() {
        cr7_websiteImg.src = 'https://static.vecteezy.com/system/resources/previews/010/994/486/non_2x/cr7-symbol-logo-white-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg';
    });

    cr7_websiteLink.addEventListener('mouseout', function() {
        cr7_websiteImg.src = 'https://static.vecteezy.com/system/resources/previews/010/994/282/non_2x/cr7-logo-symbol-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg';
    });
});