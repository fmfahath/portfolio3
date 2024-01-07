const header = document.querySelector('header');
const menuIcon = document.querySelector('#menu-icon');
const  navbar = document.querySelector('.navbar');


//navbar scroll bg color channge event
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
});

// menu icon show/hide fnnction
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.addEventListener('scroll', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});