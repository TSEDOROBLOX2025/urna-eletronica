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

// Função para registrar o voto
function votar(numero) {
    const cargo = identificarCargo(numero); // Identifica o cargo com base no número

    if (cargo) {
        // Envia o voto para o Firebase
        db.collection("votos").add({
            cargo: cargo,
            numero: numero,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            mostrarMensagem("Voto registrado com sucesso!");
        })
        .catch((error) => {
            mostrarMensagem("Erro ao registrar o voto. Tente novamente.");
            console.error(error);
        });
    } else {
        mostrarMensagem("Número inválido! Digite um número de candidato válido.");
    }
}

// Função para identificar o cargo com base no número do candidato
function identificarCargo(numero) {
    // Exemplo simples para identificar os cargos
    if (numero == 22) return "Presidente"; 
    if (numero == 44) return "Governador";
    if (numero == 10) return "Deputado"; 
    return null;  // Se não for um número válido
}

// Função para mostrar mensagens
function mostrarMensagem(mensagem) {
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = mensagem;
}
