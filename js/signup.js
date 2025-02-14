let signupForm = document.getElementById('signup-form')
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let confSenha = document.getElementById('conf-senha');
let nomeError1 = document.getElementById('nome-error-1');
let nomeError2 = document.getElementById('nome-error-2');
let emailError1 = document.getElementById('email-error-1');
let emailError2 = document.getElementById('email-error-2');
let senhaError1 = document.getElementById('senha-error-1');
let senhaError2 = document.getElementById('senha-error-2');
let confSenhaError1 = document.getElementById('conf-senha-error-1');
let confSenhaError2 = document.getElementById('conf-senha-error-2');
let confSenhaError3 = document.getElementById('conf-senha-error-3');
let dateMesError = document.getElementById('data-mes-error');
let dateDiaError = document.getElementById('data-dia-error');
let dateAnoError = document.getElementById('data-ano-error');
let iconSuccessName = document.getElementById('icon-success-name');
let iconSuccessEmail = document.getElementById('icon-success-email');
let iconSuccessSenha = document.getElementById('icon-success-senha');
let iconSuccessConfSenha = document.getElementById('icon-success-conf-senha');
let iconErrorName = document.getElementById('icon-error-name');
let iconErrorEmail = document.getElementById('icon-error-email');
let iconErrorSenha = document.getElementById('icon-error-senha');
let iconErrorConfSenha = document.getElementById('icon-error-conf-senha');
let containerNome = document.getElementById('container-nome');
let containerEmail = document.getElementById('container-email');
let containerSenha = document.getElementById('container-senha');
let containerConfSenha = document.getElementById('container-conf-senha');
const daySelect = document.getElementById("dia-nas");
const monthSelect = document.getElementById("mes-nas");
const yearSelect = document.getElementById("ano-nas");
const termsOpNot = document.getElementById('nao');
const termsOpYes = document.getElementById('sim');
let buttonSignup = document.getElementById('button-signup');
let isValid = true;

//Verifica se um nome de usuário é válido
function validateName(nomeValue) { 
    const regex = /^[A-Za-zÀ-ÿ ]+$/;
    return regex.test(nomeValue.trim());
}

//Verifica se o email é valido
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

//Verifica se a senha possui pelo menos 6 dígitos
function validatePassword(senha){
    if(senha.length >= 6 && senha.length <= 10){
        return true;
    }else{
        return false;
    }
}

//Verifica se as senhas correspondem
function passwordsMatch(senha, confSenha){
    if(senha.trim() === confSenha.trim()){
        return true;
    } else {
        return false;
    }
}

//Valida a data de nascimento
function validateDate(camp){
    if(camp === monthSelect){
        return (monthSelect.options[monthSelect.selectedIndex].textContent === 'Mês');
    }else if(camp === daySelect){
        return (daySelect.options[daySelect.selectedIndex].textContent === 'Dia')
    }else{
        return (yearSelect.options[yearSelect.selectedIndex].textContent === 'Ano')
    }
}

//Faz a validação ao dar submissão no formulário 
function verifyValidate(event) {
    isValid = true;

    //Valida Nome
    if (nome.value === '') {
        containerNome.classList.add('error');
        containerNome.classList.remove('success');
        iconErrorName.style.display = 'block';
        iconSuccessName.style.display = 'none';
        nomeError1.style.display = 'block';
        nomeError2.style.display = 'none';
        isValid = false;
    } else if (validateName(nome.value)) {
        containerNome.classList.remove('error');
        containerNome.classList.add('success');
        iconErrorName.style.display = 'none';
        iconSuccessName.style.display = 'block';
        nomeError1.style.display = 'none';
        nomeError2.style.display = 'none';
    } else {
        containerNome.classList.add('error');
        containerNome.classList.remove('success');
        iconErrorName.style.display = 'block';
        iconSuccessName.style.display = 'none';
        nomeError1.style.display = 'none';
        nomeError2.style.display = 'block';
        isValid = false;
    }

    //Valida email
    if (email.value === '') {
        containerEmail.classList.add('error');
        containerEmail.classList.remove('success');
        iconErrorEmail.style.display = 'block';
        iconSuccessEmail.style.display = 'none';
        emailError1.style.display = 'block';
        emailError2.style.display = 'none';
        isValid = false;
    } else if (!validateEmail(email.value)) {
        containerEmail.classList.add('error');
        containerEmail.classList.remove('success');
        iconErrorEmail.style.display = 'block';
        iconSuccessEmail.style.display = 'none';
        emailError1.style.display = 'none';
        emailError2.style.display = 'block';
        isValid = false;
    } else {
        containerEmail.classList.add('success');
        containerEmail.classList.remove('error');
        iconErrorEmail.style.display = 'none';
        iconSuccessEmail.style.display = 'block';
        emailError1.style.display = 'none';
        emailError2.style.display = 'none';
    }

    //valida senha
    if (senha.value === '') {
        containerSenha.classList.add('error');
        containerSenha.classList.remove('success');
        iconErrorSenha.style.display = 'block';
        iconSuccessSenha.style.display = 'none';
        senhaError1.style.display = 'block';
        senhaError2.style.display = 'none';
        isValid = false;
    } else if(!validatePassword(senha.value)){
        containerSenha.classList.add('error');
        containerSenha.classList.remove('success');
        iconErrorSenha.style.display = 'block';
        iconSuccessSenha.style.display = 'none';
        senhaError1.style.display = 'none';
        senhaError2.style.display = 'block';
        isValid = false;
    } else {
        containerSenha.classList.add('success');
        containerSenha.classList.remove('error');
        iconErrorSenha.style.display = 'none';
        iconSuccessSenha.style.display = 'block';
        senhaError1.style.display = 'none';
        senhaError2.style.display = 'none';
    }

    //Valida correspondência das senhas
    if(senha.value === '' && confSenha.value !== ''){
        containerConfSenha.classList.add('error');
        containerConfSenha.classList.remove('success');
        iconErrorConfSenha.style.display = 'block';
        iconSuccessConfSenha.style.display = 'none';
        confSenhaError1.style.display = 'none';
        confSenhaError2.style.display = 'none';
        confSenhaError3.style.display = 'block';
        isValid = false;
    } else if(confSenha.value === ''){
        containerConfSenha.classList.add('error');
        containerConfSenha.classList.remove('success');
        iconErrorConfSenha.style.display = 'block';
        iconSuccessConfSenha.style.display = 'none';
        confSenhaError1.style.display = 'none';
        confSenhaError2.style.display = 'block';
        confSenhaError3.style.display = 'none';
        isValid = false;
    } else if(!passwordsMatch(senha.value, confSenha.value)){
        containerConfSenha.classList.add('error');
        containerConfSenha.classList.remove('success');
        iconErrorConfSenha.style.display = 'block';
        iconSuccessConfSenha.style.display = 'none';
        confSenhaError1.style.display = 'block';
        confSenhaError2.style.display = 'none';
        confSenhaError3.style.display = 'none';
        isValid = false;
    } else {
        containerConfSenha.classList.add('success');
        containerConfSenha.classList.remove('error');
        iconErrorConfSenha.style.display = 'none';
        iconSuccessConfSenha.style.display = 'block';
        confSenhaError1.style.display = 'none';
        confSenhaError2.style.display = 'none';
        confSenhaError3.style.display = 'none';
    }

    if(!validateDate(monthSelect)){
        monthSelect.classList.add('success');
        monthSelect.classList.remove('error');
        dateMesError.style.display = 'none';
    } else{
        monthSelect.classList.add('error');
        monthSelect.classList.remove('success');
        dateMesError.style.display = 'block';
        isValid = false;
    }

    if(!validateDate(daySelect)){
        daySelect.classList.add('success');
        daySelect.classList.remove('error');
        dateDiaError.style.display = 'none';
    } else{
        daySelect.classList.add('error');
        daySelect.classList.remove('success');
        dateDiaError.style.display = 'block';
        isValid = false;
    }

    if(!validateDate(yearSelect)){
        yearSelect.classList.add('success');
        yearSelect.classList.remove('error');
        dateAnoError.style.display = 'none';
    } else{
        yearSelect.classList.add('error');
        yearSelect.classList.remove('success');
        dateAnoError.style.display = 'block';
        isValid = false;
    }
    
    if (!isValid) {
        event.preventDefault();
    }
}

// Função para verificar se um ano é bissexto
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Preenche os dias com base no mês selecionado (sempre mostra até o dia 29 para fevereiro)
function updateDays() {
    const month = parseInt(monthSelect.value);

    let daysInMonth;
    if (month === 2) { // Fevereiro
        daysInMonth = 29; 
    } else if ([4, 6, 9, 11].includes(month)) { // Meses com 30 dias
        daysInMonth = 30;
    } else { // Meses com 31 dias
        daysInMonth = 31;
    }

    // Limpa as opções atuais de dias e adiciona a seleção padrão 
    daySelect.innerHTML = "<option selected disabled>Dia</option>";

    // Preenche as opções de dias
    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement("option");
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }

    // Se o mês for fevereiro e o dia 29 for selecionado, filtra os anos bissextos
    if (month === 2 && daySelect.value === "29") {
        filterLeapYears();
    }
}

// Filtra os anos bissextos
function filterLeapYears() {
    const currentYear = new Date().getFullYear();
    const selectedDay = parseInt(daySelect.value);
    const selectedMonth = parseInt(monthSelect.value);

    // Limpa as opções atuais de anos
    yearSelect.innerHTML = "";

    // Preenche as opções de anos apenas com anos bissextos se o dia 29 de fevereiro for selecionado
    for (let year = currentYear; year >= 1900; year--) {
        if (selectedMonth === 2 && selectedDay === 29 && !isLeapYear(year)) {
            continue; // Pula anos não bissextos se o dia for 29 de fevereiro
        }
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Preenche os anos (exemplo: de 1900 a 2030)
function populateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

// Atualiza os dias quando o mês é alterado
monthSelect.addEventListener("change", updateDays);

// Filtra os anos quando o dia é alterado (especialmente para o dia 29 de fevereiro)
daySelect.addEventListener("change", () => {
    const selectedMonth = parseInt(monthSelect.value);
    const selectedDay = parseInt(daySelect.value);

    if (selectedMonth === 2 && selectedDay === 29) {
        filterLeapYears();
    } else {
        populateYears(); // Restaura todos os anos se não for dia 29 de fevereiro
    }
});


function toggleLoginButton() {
    if (termsOpYes.checked) {
        buttonSignup.classList.add('button-enable');
        buttonSignup.classList.remove('button-disable');
        buttonSignup.disabled = false;
    } 
    if(termsOpNot.checked) {
        buttonSignup.classList.add('button-disable');
        buttonSignup.classList.remove('button-enable');
        buttonSignup.disabled = true;
    }
}

// Atualiza o botão sempre a opção "sim" é selecionada
termsOpYes.addEventListener('input', toggleLoginButton);
// Atualiza o botão sempre a opção "não" é selecionada
termsOpNot.addEventListener('input', toggleLoginButton);

// Garante que o botão começa desabilitado
toggleLoginButton();

// Preenche os anos e dias ao carregar a página
populateYears();
updateDays();

//Validando as entradas
signupForm.addEventListener('submit', verifyValidate);






