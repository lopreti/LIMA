document.getElementById("buttonEntrar").addEventListener("click", function() {

    const resposta = document.getElementById("respDruida").value.trim().toLowerCase();

    if (resposta === "veridian") {
        alert(" O portal se abriu! Você despertou o Espírito do Bosque! ");
    } else {
        alert(" As árvores murmuram: esse não é o verdadeiro nome...");
    }
});
