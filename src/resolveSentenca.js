const GRAMATICAS = [
    {
        S: "aBa|Baa",
        B: 'A',
        A: 'bb'
    },
    {
        S: "X|Ha",
        X: 'H',
        H: 'a'
    },
    {
        S: "BA|aaB",
        B: 'b',
        A: 'a'
    },
]

function resolveSentenca(sentenca, gramatica) {
    let resultado = [];
    let s = sentenca[0];

    while (s) {
        if (s === s.toLowerCase()) {
            resultado.push(s);
            sentenca.splice(0, 1);
        } else if (s === s.toUpperCase()) {
            let g = gramatica[s];

            if (!g) {
                throw new Error(`A Sentenca ${s} não contem na gramatica.`)
            }

            sentenca.splice(0, 1);
            g = g.split('');
            sentenca = [...g, ...sentenca];

            const r = resolveSentenca(sentenca, gramatica);

            resultado = [...resultado, ...r];
            sentenca = [];
        }

        s = sentenca[0];
    }

    return resultado;
}
