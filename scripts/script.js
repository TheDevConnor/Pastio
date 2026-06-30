document.querySelectorAll('.menu .tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.menu .tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const cat = tab.dataset.cat;
        document.querySelectorAll('.menu .slice').forEach(slice => {
            slice.style.display = (cat === 'all' || slice.dataset.cat === cat) ? '' : 'none';
        });
    });
});

// Mobile nav toggle
const navToggle = document.getElementById('navtoggle');
const mobileMenu = document.getElementById('mobilemenu');
navToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});