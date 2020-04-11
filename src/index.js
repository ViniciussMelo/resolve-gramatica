const input = document.getElementById('gramatica');
const botao = document.getElementById('botao');
const resultadoTextArea = document.getElementById('resultado');
const gramaticasUl = document.getElementById('gramaticas');

const gramaticasLi = GRAMATICAS.map((gramatica, index) => {
    let html = `<li class="list-group-item"> <b>${index} - <b/>`;

    for (const key in gramatica) {
        if (gramatica.hasOwnProperty(key)) {
            const element = gramatica[key];
            html += `<br />${key} = ${element}`
        }
    }

    html += "</li>";
    return html;
});

gramaticasUl.innerHTML = gramaticasLi.join('');

botao.addEventListener('click', () => {
    const {value} = input;
    const gramatica = GRAMATICAS[value];

    if (!gramatica) {
        alert("Não existe a gramática selecionada.")
        return;
    }

    let sentencas = gramatica['S'];
    sentencas = sentencas.split('|');

    const posicao = Math.round(Math.random() * (sentencas.length - 1));
    let sentenca = sentencas[posicao];
    let inputValue = 'S = ' + sentenca + '\n';
    sentenca = sentenca.split('');

    const resultado = resolveSentenca(sentenca, gramatica);

    inputValue += resultado.join(' ');
    resultadoTextArea.value = inputValue;
});
