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

// Função para carregar votos de localStorage
function carregarVotos() {
    let votos = JSON.parse(localStorage.getItem("votos"));
    if (!votos) votos = {presidente: {}, governador: {}, senador: {}, deputadoF: {}, deputadoE: {}};
    return votos;
}

// Função para atualizar votos
function salvarVoto(voto, cargo) {
    let votos = carregarVotos();
    if (!votos[cargo][voto]) votos[cargo][voto] = 0;
    votos[cargo][voto]++;
    localStorage.setItem("votos", JSON.stringify(votos));
}

// Função para mostrar resultados
function mostrarResultados() {
    let votos = carregarVotos();
    let resultados = "<h3>Resultados de Votação:</h3>";

    // Exibindo votos por cargo
    for (let cargo in votos) {
        resultados += `<h4>${cargo.charAt(0).toUpperCase() + cargo.slice(1)}</h4>`;
        for (let candidato in votos[cargo]) {
            resultados += `${candidatos[cargo][candidato] || candidato}: ${votos[cargo][candidato]} votos<br>`;
        }
    }

    document.getElementById("resultadoVoto").innerHTML = resultados;
}

// Função para confirmar o voto
function confirmarVoto() {
    let resultado = "Você votou em:\n";
    let erro = false;

    // Coletando votos dos candidatos
    let presidente = document.getElementById("presidente").value;
    let governador = document.getElementById("governador").value;
    let senador = document.getElementById("senador").value;
    let deputadoF = document.getElementById("deputadoF").value;
    let deputadoE = document.getElementById("deputadoE").value;

    // Verificando se os votos são válidos
    if (candidatos.presidente[presidente]) {
        resultado += "Presidente: " + candidatos.presidente[presidente] + "\n";
        salvarVoto(presidente, "presidente");
    } else {
        erro = true;
    }

    if (candidatos.governador[governador]) {
        resultado += "Governador: " + candidatos.governador[governador] + "\n";
        salvarVoto(governador, "governador");
    } else {
        erro = true;
    }

    if (candidatos.senador[senador]) {
        resultado += "Senador: " + candidatos.senador[senador] + "\n";
        salvarVoto(senador, "senador");
    } else {
        erro = true;
    }

    if (candidatos.deputadoF[deputadoF]) {
        resultado += "Deputado Federal: " + candidatos.deputadoF[deputadoF] + "\n";
        salvarVoto(deputadoF, "deputadoF");
    } else {
        erro = true;
    }

    if (candidatos.deputadoE[deputadoE]) {
        resultado += "Deputado Estadual: " + candidatos.deputadoE[deputadoE] + "\n";
        salvarVoto(deputadoE, "deputadoE");
    } else {
        erro = true;
    }

    // Exibindo o resultado
    if (erro) {
        document.getElementById("resultadoVoto").textContent = "Algum número de candidato é inválido!";
    } else {
        document.getElementById("resultadoVoto").textContent = resultado;
    }
}

// Exibindo os resultados ao carregar a página
mostrarResultados();
