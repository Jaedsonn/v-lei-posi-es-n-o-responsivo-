function indique() {
    var perguntas = document.getElementsByClassName('ask')[0].value;
    var perguntas1 = parseFloat(document.getElementsByClassName('ask')[1].value);
    var resposta = document.getElementById('res');
    var imagem = document.getElementsByTagName("img")[0]
    if (perguntas === "Masculino") {
        if (perguntas1 <= 1.60 || perguntas1 < 1.77) {
            resposta.innerHTML = "Líbero";
        } else if (perguntas1 > 1.75 && perguntas1 <= 1.85) {
            resposta.innerHTML = "Líbero ou Levantador";
        } else if (perguntas1 > 1.85 && perguntas1 < 1.90) {
            resposta.innerHTML = "Levantador, líbero ou ponteiro";
        } else if (perguntas1 >= 1.90 && perguntas1 < 2.00) {
            resposta.innerHTML = "Levantador, líbero(Apesar de que, pela altura, seja mais eficiente escolher outra posição), ponteiro ou oposto";
        } else {
            resposta.innerHTML = "Central, ou outra posição de sua vontade.Recomendo uma posição de que ataque"
        }
    } else if (perguntas === "Feminino") {
        if (perguntas1 <= 1.60 || (perguntas1 >= 1.60 && perguntas1 < 1.70)) {
            resposta.innerHTML = "Líbero";
        } else if (perguntas1 >= 1.70 && perguntas1 <= 1.79) {
            resposta.innerHTML = "Líbero ou Levantadora";
        } else if (perguntas1 > 1.79 && perguntas1 < 1.85) {
            resposta.innerHTML = " Líbero, levantadora, ponteira ou até mesmo oposta"
        } else {
            resposta.innerHTML = "Central, ou na posição que desejar(Central tendo em vista que existem jogadoras, como a Carol, que tem 1,80 e são centrais).Recomendo uma posição de ataque.";
        }
    }
}
