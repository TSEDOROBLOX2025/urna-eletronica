// Lista de candidatos por cargo
const candidatos = {
    presidente: {
        "22": "Álvaro - PL",
        "44": "Pedrinho - UB",
        "40": "Issac R. - PSB",
        "10": "Artur - Republicanos",
        "77": "Biel - Solidariedade"
    },
    governador: {
        "22": "Lucas M. - PL",
        "55": "Henrique O. - PSD",
        "44": "Polar G. - UB"
    },
    senador: {
        "222": "Valmir F. - PL",
        "225": "Aquiles G. - PL",
        "444": "Wanderley S. - UB",
        "301": "Karina M. - PN",
        "442": "Ian C. - UB",
        "515": "Chico N. - PATRI"
    },
    deputadoF: {
        "15.22": "Pedro E. - MDB",
        "22.00": "Gabriel E. - PL",
        "55.00": "Gustavo - PSD",
        "22.22": "Maurílio T. - PL",
        "28.00": "Pablo M. - PRTB",
        "43.43": "Guilherme - PV"
    },
    deputadoE: {
        "22.000": "Ryan B. - PL",
        "22.123": "Pedro L. - PL",
        "80.000": "Kenety P. - UP",
        "12.000": "Ciro G. - PDT"
    }
};

// Voto de cada cargo
let votos = {
    presidente: "",
    governador: "",
    senador: "",
    deputadoF: "",
    deputadoE: ""
};

// Função para votar
function votar(cargo, numero) {
    votos[cargo] = numero;  // Armazenar o número do candidato votado
    document.getElementById("resultadoVoto").textContent = `Você votou no candidato: ${candidatos[cargo][numero]}`;
}

// Função para confirmar o voto
function confirmarVoto() {
    let resultado = "Você votou em:\n";
    let erro = false;

    // Exibindo votos
    for (let cargo in votos) {
        let voto = votos[cargo];
        if (voto) {
            resultado += `${cargo.charAt(0).toUpperCase() + cargo.slice(1)}: ${candidatos[cargo][voto]} \n`;
        } else {
            erro = true;
        }
    }

    // Mostrar resultado final
    if (erro) {
        document.getElementById("resultadoVoto").textContent = "Você não completou sua votação. Por favor, vote em todos os cargos.";
    } else {
        document.getElementById("resultadoVoto").textContent = resultado;
    }
}
