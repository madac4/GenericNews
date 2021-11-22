@@include('slider.js');
const searchButton = document.querySelector('.header-buttons__search');
const searchModal = document.querySelector('.search-modal');
const searchInput = document.getElementById('search');
const searchClose = document.querySelector('.search-close');
const overlay = document.querySelector('.overlay');

const username = document.getElementById('username')
const email = document.getElementById('email')
const emailRegister = document.getElementById('email-register')
const password = document.getElementById('password')
const passwordRegister = document.getElementById('password-register')
const loginForm = document.getElementById('login-form')
const registerForm = document.getElementById('register-form')
const passwordToggler = document.getElementById('password-toggler')
const passwordToggler2 = document.getElementById('password-toggler2')
const passwordToggler3 = document.getElementById('password-toggler3')
const passwordToggler4 = document.getElementById('password-toggler4')
const passwordNew = document.getElementById('password-reset')
const passwordConfirm = document.getElementById('password-confirm')

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

const shareButton = document.querySelector('.share');
const shareOptions = document.querySelector('.share-options');
const copyToClipboard = document.querySelector('.share-options__link');

const raportError = document.querySelector('.raport-error');
const articleSave = document.querySelector('.article-save');
const raportErrorClose = document.querySelector('.raport-error__close');

const lostPasswordButton = document.querySelectorAll('.lost-password');
const lostPasswordModal = document.querySelector('.password-modal');
const closePasswordModal = document.querySelector('.password-modal .close-modal');
const openLoginModal = document.querySelector('.password-modal .form-buttons p button');
const resetForm = document.querySelector('.reset-form');
const emailMessageModal = document.querySelector('.email-message');
const emailMessageClose = document.querySelector('.email-message .email-message__close');

const headerAccount = document.querySelector('.header-buttons__account');
const accountPopup = document.querySelector('.account-popup')

if (articleSave) {
    articleSave.addEventListener('click', () => {
        raportError.classList.add('open');
        overlay.classList.add('open');
    });
    raportErrorClose.addEventListener('click', () => {
        raportError.classList.remove('open');
        overlay.classList.remove('open');
    })
}

if (raportModal) {
    sidebarWrite.addEventListener('click', (e) => {
        raportModal.classList.add('open');
        overlay.classList.add('open');
        if (raportModal.classList.contains('open')) {
            document.addEventListener('mousedown', (e) => {
                if (!e.target.closest('.raport-modal')) {
                    raportModal.classList.remove('open');
                    overlay.classList.remove('open');
                }
            })
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
}
if (passwordToggler2) {
    passwordToggler2.addEventListener('click', function (e) {
        const type = passwordRegister.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordRegister.setAttribute('type', type);
        this.classList.toggle('icon-eye-slash');
    });
}
if (passwordToggler3) {
    passwordToggler3.addEventListener('click', function (e) {
        const type = passwordNew.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordNew.setAttribute('type', type);
        this.classList.toggle('icon-eye-slash');
    });
}
if (passwordToggler4) {
    passwordToggler4.addEventListener('click', function (e) {
        const type = passwordConfirm.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordConfirm.setAttribute('type', type);
        this.classList.toggle('icon-eye-slash');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const line = document.querySelector('.header-progress__line');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        let windowHeight = window.innerHeight;
        let pageHeight = document.documentElement.scrollHeight;

        let progressBar = Math.floor(scrollPos / (pageHeight - windowHeight) * 100);

        line.style.width = `${progressBar}%`;
    });
});

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

if (authOpen) {
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

if (shareButton) {
    shareButton.addEventListener('click', () => {
        shareOptions.classList.toggle('open');
    });
    copyToClipboard.addEventListener('click', () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl)
        copyToClipboard.textContent = 'LINK COPIAT'
        copyToClipboard.classList.remove('button-outline');
        copyToClipboard.classList.add('button-light');
    })
}


if (lostPasswordModal) {
    lostPasswordButton.forEach(button => {
        button.addEventListener('click', () => {
            lostPasswordModal.classList.add('open');
            authModal.classList.remove('open');
        });
    })

    openLoginModal.addEventListener('click', () => {
        authModal.classList.add('open');
        lostPasswordModal.classList.remove('open');
    })

    closePasswordModal.addEventListener('click', () => {
        lostPasswordModal.classList.remove('open');
        overlay.classList.remove('open');
        document.body.classList.remove('lock');
    })

    resetForm.addEventListener('submit', (event) => {
        event.preventDefault
        const emailsValue = document.getElementById("email-reset").value
        const confEmail = document.getElementById("email-confirm")
        const confEmailValue = document.getElementById("email-confirm").value
        if (emailsValue !== confEmailValue) {
            confEmail.nextElementSibling.textContent = 'Email-urile nu coincid';
        } else {
            emailMessageModal.classList.add('open')
            lostPasswordModal.classList.remove('open')
        }
    })

    emailMessageClose.addEventListener('click', () => {
        emailMessageModal.classList.remove('open')
        overlay.classList.remove('open')
    })
}

if (headerAccount) {
    headerAccount.addEventListener('click', () =>{
        accountPopup.classList.toggle('open')
    })
}