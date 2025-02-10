document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("tzeet-content");
    const counter = document.getElementById("count-char");
    const button = document.getElementById("button-send-tzeet");
    const maxLength = 140;

    textarea.addEventListener("input", function () {
        const length = textarea.value.length;
        const remaining = maxLength - length;

        // Atualiza o contador de caracteres
        counter.textContent = remaining;
        counter.style.display = length === 0 ? "none" : "inline";
        
        // Muda a cor do contador conforme a proximidade do limite
        counter.style.color = remaining < 0 ? "rgb(255, 0, 0)" :
                              remaining < 40 ? "rgb(255, 200, 0)" : "";

        // Habilita/desabilita o botão e muda a cor dele
        if (length === 0 || remaining < 0) {
            button.disabled = true;
            button.classList.remove("enabled");
        } else {
            button.disabled = false;
            button.classList.add("enabled");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("tzeet-content");

    textarea.addEventListener("input", function () {
        this.style.height = "auto"; // Reseta a altura para evitar crescimento infinito
        this.style.height = this.scrollHeight + "px"; // Ajusta para o tamanho do conteúdo
    });
});


document.getElementById("button-tzeet").addEventListener("click", function() {
    document.getElementById("modal-send-tzeet").style.display = "block";
});

document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("modal-send-tzeet").style.display = "none";
});