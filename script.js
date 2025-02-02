// Lista de candidatos
const candidatos = {
    "22": "Álvaro - PL",
    "44": "Pedrinho - UB",
    "40": "Issac R. - PSB",
    "10": "Artur - Republicanos",
    "77": "Biel - Solidariedade",
    "222": "Valmir F. - PL",
    "225": "Aquiles G. - PL",
    "444": "Wanderley S. - UB",
    "301": "Karina M. - PN",
    "442": "Ian C. - UB",
    "515": "Chico N. - PATRI",
    "1522": "Pedro E. - MDB",
    "2200": "Gabriel E. - PL",
    "5500": "Gustavo - PSD",
    "2222": "Maurílio T. - PL",
    "2800": "Pablo M. - PRTB",
    "4343": "Guilherme - PV",
    "22000": "Ryan B. - PL",
    "22123": "Pedro L. - PL",
    "80000": "Kenety P. - UP",
    "12000": "Ciro G. - PDT"
};

function buscarCandidato() {
    let numero = document.getElementById("numero").value;
    let nomeCandidato = document.getElementById("nomeCandidato");

    if (candidatos[numero]) {
        nomeCandidato.textContent = "Candidato: " + candidatos[numero];
    } else {
        nomeCandidato.textContent = "Número inválido!";
    }
}
