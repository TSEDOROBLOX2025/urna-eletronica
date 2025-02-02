// Configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY", // Substitua com sua chave do Firebase
    authDomain: "SEU_AUTH_DOMAIN", // Substitua com seu domínio
    databaseURL: "SEU_DATABASE_URL", // Substitua com sua URL
    projectId: "SEU_PROJECT_ID", // Substitua com seu ID do projeto
    storageBucket: "SEU_STORAGE_BUCKET", // Substitua com seu bucket
    messagingSenderId: "SEU_MESSAGING_SENDER_ID", // Substitua com o ID
    appId: "SEU_APP_ID" // Substitua com seu App ID
};

// Inicializando o Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

let numeroSelecionado = null;
let cargoSelecionado = null;

// Função para escolher o número
function escolherNumero(numero) {
    numeroSelecionado = numero;

    // Identificando o cargo com base no número escolhido
    if (numero == 22) {
        cargoSelecionado = "Presidente";
    } else if (numero == 44) {
        cargoSelecionado = "Governador";
    } else if (numero == 10) {
        cargoSelecionado = "Deputado";
    } else {
        cargoSelecionado = "Candidato Não Identificado";
    }

    // Exibindo a tela para confirmar o voto
    mostrarTelaConfirmacao();
}

// Função para mostrar a tela de confirmação de voto
function mostrarTelaConfirmacao() {
    // Escondendo a tela de escolha do número
    document.getElementById('cargo').style.display = 'none';

    // Mostrando a tela de confirmação
    document.getElementById('confirmar').style.display = 'block';
    document.getElementById('cargoNome').innerText = `Cargo: ${cargoSelecionado}`;
    document.getElementById('numeroEscolhido').innerText = numeroSelecionado;
}

// Função para confirmar o voto
function confirmarVoto() {
    // Registrando o voto no Firebase
    db.collection("votos").add({
        cargo: cargoSelecionado,
        numero: numeroSelecionado,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        mostrarMensagem("Voto registrado com sucesso!");
        resetarTela();
    })
    .catch((error) => {
        mostrarMensagem("Erro ao registrar o voto. Tente novamente.");
        console.error(error);
    });
}

// Função para mostrar mensagens
function mostrarMensagem(mensagem) {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = mensagem;
}

// Função para resetar a tela após confirmar o voto
function resetarTela() {
    // Resetando as variáveis
    numeroSelecionado = null;
    cargoSelecionado = null;

    // Exibindo novamente a tela de escolha do número
    document.getElementById('cargo').style.display = 'block';
    document.getElementById('confirmar').style.display = 'none';
}
