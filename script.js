const dropdowns = document.querySelectorAll('.faq');
const links = document.querySelectorAll('.menu a[href*="#"]'); // Selecciona todos los enlaces que contienen #

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function() {
        const isActive = dropdown.classList.contains('active');
        closeAllDropdowns();
        if (!isActive) {
            dropdown.classList.add('active');
            const content = dropdown.querySelector('.content');
            content.style.height = content.scrollHeight + 'px';
        }
    });
});

links.forEach(link => {
    link.addEventListener('click', function() {
        // Aquí puedes poner la lógica para cerrar el menú hamburguesa
        closeMenu();
        closeAllDropdowns();
    });
});

function closeAllDropdowns() {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
        const content = dropdown.querySelector('.content');
        content.style.height = '0';
    });
}

function closeMenu() {
    const menu = document.querySelector('.menu'); // Ajusta el selector según tu estructura
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
}
 // Selecciona todos los enlaces dentro del menú
 const navLinks = document.querySelectorAll('.nav-link');
      
 navLinks.forEach(link => {
   link.addEventListener('click', () => {
     // Desmarca el checkbox para cerrar el menú
     document.getElementById('toggle').checked = false;
   });
 });