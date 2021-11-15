@@include('slider.js');
const searchButton = document.querySelector('.header-buttons__search');
const searchModal = document.querySelector('.search-modal');
const searchInput = document.getElementById('search');
const searchClose = document.querySelector('.search-close');
const overlay = document.querySelector('.overlay');

const languageToggler = document.querySelector('.language-toggler');

const username = document.getElementById('username')
const email = document.getElementById('email')
const emailRegister = document.getElementById('email-register')
const password = document.getElementById('password')
const passwordRegister = document.getElementById('password-register')
const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')
const passwordToggler = document.getElementById('password-toggler')
const passwordToggler2 = document.getElementById('password-toggler2')

const authModal = document.querySelector('.auth-modal');
const authClose = document.querySelector('.auth-close');
const authOpen = document.querySelector('.header-buttons__login');

const authModalControls = document.querySelector('.auth-modal__controls');
const authTabsControl = document.querySelectorAll('.auth-modal__controls .tabs-control');
const authTabsForm = document.querySelectorAll('.auth-form');

const header = document.querySelector('.header');
const upperHeader = document.querySelector('.upper-header');

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-menu');

const homeArticles = document.querySelector('.blog-article__post');

const sidebarWrite = document.querySelector('.sidebar-write');
const raportModal = document.querySelector('.raport-modal');

if (raportModal) {
    sidebarWrite.addEventListener('click', (e) => {
        raportModal.classList.add('open');
        overlay.classList.add('open');
    })
    document.addEventListener('click', (e) => {
        if (e.target === overlay) {
            raportModal.classList.remove('open');
            overlay.classList.remove('open');
        }
    })
}

if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        // overlay.classList.toggle('open');
        document.body.classList.toggle('lock');
    })
}

if (languageToggler) {
    languageToggler.addEventListener('click', () => {
        if (languageToggler.getAttribute('data-language') === 'ro') {
            languageToggler.dataset.language = 'ru';
            languageToggler.textContent = 'ru'
        } else {
            languageToggler.dataset.language = 'ro';
            languageToggler.textContent = 'ro'
        }
    })
}

if (homeArticles) {
    const bookmark = homeArticles.querySelector('.blog-article__save')
    const backButton = homeArticles.nextElementSibling.querySelector('.button-back')
    bookmark.addEventListener('click', () => {
        homeArticles.classList.add('flip')
        homeArticles.nextElementSibling.classList.add('flip')
    });
    backButton.addEventListener('click', () => {
        homeArticles.classList.remove('flip')
        homeArticles.nextElementSibling.classList.remove('flip')
    });
}

if (searchModal) {
    searchButton.addEventListener('click', function () {
        searchModal.classList.add('open');
        document.body.classList.add('lock');
        setTimeout(() => {
            searchInput.focus()
        }, 50);
    })

    searchClose.addEventListener('click', () => {
        searchModal.classList.remove('open');
        document.body.classList.remove('lock');
    })
}

if (passwordToggler) {
    passwordToggler.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('icon-eye-slash');
    });
    passwordToggler2.addEventListener('click', function (e) {
        const type = passwordRegister.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordRegister.setAttribute('type', type);
        this.classList.toggle('icon-eye-slash');
    });
}



function loginFormValidation() {
    const atposition = email.value.indexOf("@");
    const dotposition = email.value.lastIndexOf(".");

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.value.length) {
        email.nextElementSibling.textContent = "Emailul nu este valid"
    } else {
        email.nextElementSibling.textContent = ""
    }

    if (password.value.length < 6) {
        password.nextElementSibling.textContent = "Parola trebuie sa contina 6 caractere sau mai mult"
    } else {
        password.nextElementSibling.textContent = ""
    }
}

function registerFormValidation() {
    const atposition = emailRegister.value.indexOf("@");
    const dotposition = emailRegister.value.lastIndexOf(".");
    if (username.value == null || username.value == "") {
        username.nextElementSibling.textContent = "Username nu poate fi gol"
    } else if (username.value.length < 4) {
        username.nextElementSibling.textContent = "Trebuie să conțină cel puțin 4 caractere, fără diacritice"
    } else {
        username.nextElementSibling.textContent = ""
    }

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= emailRegister.value.length) {
        emailRegister.nextElementSibling.textContent = "Emailul nu este valid"
    } else {
        emailRegister.nextElementSibling.textContent = ""
    }

    if (passwordRegister.value.length < 6) {
        passwordRegister.nextElementSibling.textContent = "Parola trebuie sa contina 6 caractere sau mai mult"
    } else {
        passwordRegister.nextElementSibling.textContent = ""
    }
}

if (loginForm.style.display !== "none") {
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        loginFormValidation()
    })
}

if (registerForm.style.display !== 'none') {
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        registerFormValidation()
    })
}

if (authTabsControl) {
    authModalControls.addEventListener('click', (e) => {
        const id = e.target.dataset.tab;
        console.log(id);
        authTabsControl.forEach(button => {
            button.classList.remove('active')
        })
        e.target.classList.add('active');

        authTabsForm.forEach(form => {
            form.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    })
}

if (authModal) {
    authOpen.addEventListener("click", () => {
        authModal.classList.add('open');
        overlay.classList.add('open');
        document.body.classList.add('lock');
    })
    authClose.addEventListener('click', () => {
        authModal.classList.remove('open');
        overlay.classList.remove('open');
        document.body.classList.remove('lock');
    })
    document.addEventListener('click', (e) => {
        if (e.target === overlay) {
            authModal.classList.remove('open');
            overlay.classList.remove('open');
            document.body.classList.remove('lock');
        }
    })
}

if (header) {
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        const headerHeight = header.offsetHeight;
        const upperHeaderHeight = upperHeader.offsetHeight;

        if (scrollPos > upperHeaderHeight + headerHeight) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    })
}