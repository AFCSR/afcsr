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


function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}
function addObserver(el, options) {
    if (!('IntersectionObserver' in window)) {
        if (options.cb) {
            options.cb(el)
        } else {
            entry.target.classList.add('active')
        }
        // We don't need to execute the rest of the code
        return
    }

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (options.cb) {
                    options.cb(el)
                } else {
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}

heroText = document.querySelector('.hero-text');
scrollTrigger('.hero-text')