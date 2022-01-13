const menuBtn = document.querySelector('.menuBtn');
const contactBtn = document.querySelector('.contactBtn');
const menuModal = document.querySelector('#menu');
const contactModal = document.querySelector('#contact');
const closeModalMenu = document.querySelector('.close-menu');
const closeModalContact = document.querySelector('.close-contact');
const formBtn = document.querySelector('.submitBtn');


menuBtn.addEventListener('click', () => {
    menuModal.style.display = 'block';
})

contactBtn.addEventListener('click', () => {
    contactModal.style.display = 'block';
})

closeModalMenu.addEventListener('click', () => {
    menuModal.style.display = 'none';
})

closeModalContact.addEventListener('click', () => {
    contactModal.style.display = 'none';
})

formBtn.addEventListener('click', (e) => {
    contactModal.style.display = 'none';

    e.preventDefault();
})



