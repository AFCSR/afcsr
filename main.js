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