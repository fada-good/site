function changeToRegister() {
    document.getElementById('login').classList.remove('active');
    document.getElementById('register').classList.add('active');
}

function changeToLogin() {
    document.getElementById('register').classList.remove('active');
    document.getElementById('login').classList.add('active');
}

function activeInput(element) {
    element.querySelector('input').focus();
}

