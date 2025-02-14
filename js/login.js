let loginForm = document.getElementById('login-form')
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let emailError1 = document.getElementById('emailError-1');
let emailError2 = document.getElementById('emailError-2');
let senhaError = document.getElementById('senhaError');
let iconSuccessEmail = document.getElementById('icon-success-email');
let iconErrorEmail = document.getElementById('icon-error-email');
let iconSuccessSenha = document.getElementById('icon-success-senha');
let iconErrorSenha = document.getElementById('icon-error-senha');
let containerEmail = document.getElementById('container-email');
let containerSenha = document.getElementById('container-senha');
let buttonLogin = document.getElementById('button-login');
let isValid = true;

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateDuring(input) {
    // Validação quando o campo perde o foco
    input.addEventListener('blur', function() {
        validateBlur(input);
    });

    // Validação em tempo real enquanto o usuário digita
    input.addEventListener('input', function() {
        cleanStatus(input)
        validateInput(input);
    });
}

//Limpa os erros quando o usuário clicar para digitar novamente
function cleanStatus(input){
    if(input.type == 'email'){
        emailError1.style.display = 'none';
        emailError2.style.display = 'none';
        iconErrorEmail.style.display = 'none';
        iconSuccessEmail.style.display = 'none';
        containerEmail.classList.remove('error');
        containerEmail.classList.remove('success');
    }else {
        senhaError.style.display = 'none';
        iconErrorSenha.style.display = 'none';
        iconSuccessSenha.style.display = 'none';
        containerSenha.classList.remove('error');
        containerSenha.classList.remove('success');
    }
}

// Faz a validação assim que o usuário retira o foco do campo
function validateBlur(input) {
    const value = input.value.trim();
    if (input.type === 'email') {
        if (value === '') {
            emailError1.style.display = 'none';
            emailError2.style.display = 'none';
            iconErrorEmail.style.display = 'none';
            iconSuccessEmail.style.display = 'none';
            containerEmail.classList.remove('error');
            containerEmail.classList.remove('success');
        } else if (!validateEmail(value)) {
            emailError1.style.display = 'none';
            emailError2.style.display = 'block';
            iconErrorEmail.style.display = 'block';
            iconSuccessEmail.style.display = 'none';
            containerEmail.classList.add('error');
            containerEmail.classList.remove('success');
        } else {
            emailError1.style.display = 'none';
            emailError2.style.display = 'none';
            iconSuccessEmail.style.display = 'block';
            iconErrorEmail.style.display = 'none';
            containerEmail.classList.add('success');
            containerEmail.classList.remove('error');
        }
    } else {
        if (value === '') {
            senhaError.style.display = 'none';
            iconErrorSenha.style.display = 'none';
            iconSuccessSenha.style.display = 'none';
            containerSenha.classList.remove('error');
            containerSenha.classList.remove('success');
        } else {
            senhaError.style.display = 'none';
            iconSuccessSenha.style.display = 'block';
            iconErrorSenha.style.display = 'none';
            containerSenha.classList.add('success');
            containerSenha.classList.remove('error');
        }
    }
}

//Faz a validação em tempo real, assim que o usuário digita algo válido exibe na tela 
function validateInput(input) {
    const value = input.value.trim();
    if (input.type === 'email') {
        if (validateEmail(value)) {
            emailError1.style.display = 'none';
            emailError2.style.display = 'none';
            iconSuccessEmail.style.display = 'block';
            iconErrorEmail.style.display = 'none';
            containerEmail.classList.add('success');
            containerEmail.classList.remove('error');
        }
    } else {
        if (value !== '') {
            senhaError.style.display = 'none';
            iconSuccessSenha.style.display = 'block';
            iconErrorSenha.style.display = 'none';
            containerSenha.classList.add('success');
            containerSenha.classList.remove('error');
        } 
    }
}



//Faz a validação ao dar submissão no formulário 
function verifyValidate(event) {
    isValid = true;

    if (email.value === '') {
        containerEmail.classList.add('error');
        iconErrorEmail.style.display = 'block';
        iconSuccessEmail.style.display = 'none';
        emailError1.style.display = 'block';
        isValid = false;
    } else if (!validateEmail(email.value)) {
        containerEmail.classList.add('error');
        iconErrorEmail.style.display = 'block';
        iconSuccessEmail.style.display = 'none';
        emailError2.style.display = 'block';
        isValid = false;
    } else {
        containerEmail.classList.remove('error');
        iconErrorEmail.style.display = 'none';
        iconSuccessEmail.style.display = 'block';
        emailError1.style.display = 'none';
        emailError2.style.display = 'none';
    }

    if (senha.value === '') {
        containerSenha.classList.add('error');
        iconErrorSenha.style.display = 'block';
        iconSuccessSenha.style.display = 'none';
        senhaError.style.display = 'block';
        isValid = false;
    } else {
        containerSenha.classList.remove('error');
        iconErrorSenha.style.display = 'none';
        iconSuccessSenha.style.display = 'block';
        senhaError.style.display = 'none';
    }

    if (!isValid) {
        event.preventDefault();
    }
}

function toggleLoginButton() {
    if (email.value.trim().length > 0 && senha.value.trim().length > 0) {
        buttonLogin.classList.add('button-enable');
        buttonLogin.disabled = false;
    } else {
        buttonLogin.classList.remove('button-enable');
        buttonLogin.disabled = true;
    }
}

// Atualiza o botão sempre que o usuário digita
email.addEventListener('input', toggleLoginButton);
senha.addEventListener('input', toggleLoginButton);

// Garante que o botão começa desabilitado
toggleLoginButton();

loginForm.addEventListener('submit', verifyValidate);
validateDuring(email);
validateDuring(senha);
