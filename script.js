const dropdowns = document.querySelectorAll('.faq');

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

function closeAllDropdowns() {
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
        const content = dropdown.querySelector('.content');
        content.style.height = '0';
    });
}
