const searchButton = document.querySelector('.header-buttons__search');
const searchModal = document.querySelector('.search-modal');
const searchInput = document.getElementById('search');
const searchClose = document.querySelector('.search-close');
const languageToggler = document.querySelector('.language-toggler');

languageToggler.addEventListener('click', () => {
    if (languageToggler.getAttribute('data-language') === 'ro') {
        languageToggler.dataset.language = 'ru';
        languageToggler.textContent = 'ru'
    } else {
        languageToggler.dataset.language = 'ro';
        languageToggler.textContent = 'ro'
    }
})

searchButton.addEventListener('click', function() {
    searchModal.classList.add('open');
    setTimeout(() => {
        searchInput.focus()
    }, 50);
})

searchClose.addEventListener('click', () => {
    searchModal.classList.remove('open');
})