const nome = document.getElementById("userInput");
const botao = document.getElementById("actionButton");
const r = document.getElementById("resposta");

// Adicionar um evento listener para pegar as informações
// do botão quando clicado.
botao.addEventListener("click", function() {
    r.innerHTML=`Olá ${nome.value}`
});