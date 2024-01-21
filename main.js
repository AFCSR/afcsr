// Nav remove on scroll

var lastScrollTop;
navbar = document.getElementsByTagName('header')[0];
window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100%';
    }
    else {
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});


// Menu Toggle

const menu = document.querySelector('#ham-menu');
const menu_btn = document.querySelector('#ham-menu-btn');
overlay = document.querySelector('#overlay');

menu_btn.addEventListener('click', () => {
    if (menu_btn.classList.contains('opened')) {
        menu.classList.add('opened');
        menu.style.marginLeft = '0%';
        overlay.classList.remove('hidden');

        overlay.addEventListener('click', () => {
            menu.classList.remove('opened');
            menu_btn.classList.remove('opened');
            menu.style.marginLeft = '-100%';
            overlay.classList.add('hidden');
        });
    } else {
        menu.classList.remove('opened');
        menu.style.marginLeft = '-100%';
        overlay.classList.add('hidden');
    }
});

// Sparkles Animation

const sparkles = document.querySelectorAll('.highlight-sparkle');

setInterval(() => {
    sparkles.forEach(sparkle => {
        // sparkle.style.opacity = 0;
        sparkle.style.left = (Math.random() * 100) - 10 + '%';
        sparkle.style.width = 20 + Math.random() * 20 + 'px';
        sparkle.style.animation = 'none'; // Reset animation to allow restarting
        void sparkle.offsetWidth; // Trigger reflow to restart animation
        sparkle.style.animation = ''; // Re-enable animation
    });
}, 1000);

// artwork_images = document.querySelectorAll('.artwork-image');

// if (window.innerWidth <= 768) {
//     artwork_images.forEach(artwork_image => {
//         artwork_image.addEventListener('click', () => {
//             artwork_image.requestFullscreen();
//         });
//     });
// };

// Intersection Observer

let options = {
    threshold: 0.1,
};

let callback = (entries) => {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
    });
};

const observer = new IntersectionObserver(callback, options);

let elements = document.querySelectorAll(".to-animate");

elements.forEach((elem) => {
    observer.observe(elem);
});

// artwork image animation

let artwork_container = document.querySelector('#artwork-images-container');
let artwork_images = Array.from(artwork_container.getElementsByClassName('artwork-image'));

artwork_images.forEach(artwork_image => {
    artwork_image.addEventListener('mouseover', () => {
        let the_image = artwork_images.find(image => image == artwork_image);
        the_image.classList.add('animate');
        artwork_images.forEach(other_artwork_image => {
            if (other_artwork_image != the_image.parentElement) {
                other_artwork_image.querySelector('img').classList.add('fade');
            }
        });
    });

    // artwork_image.addEventListener('mouseout', () => {
    //     the_image.classList.remove('animate');
    //     artwork_images.forEach(other_artwork_image => {
    //         if (other_artwork_image != the_image.parentElement) {
    //             other_artwork_image.querySelector('img').classList.remove('fade');
    //         }
    //     });
    // });
});