
const botaoPDF = document.getElementById("botao-pdf");
const ano = document.getElementById("ano");

// Atualiza o ano automaticamente
ano.textContent = new Date().getFullYear();

// Abre a janela de impressão
botaoPDF.addEventListener("click", function () {
    window.print();
});
