const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
};

const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation');
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active');
};
