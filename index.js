const https = require('https');
const axios = require('axios');  // Recomendado usar axios para melhor manuseio de erros

const TARGET_URL = 'https://backend-express-ndpe.onrender.com';
const PING_INTERVAL = 1000 * 60 * 4; // 4 minutos

// Função para pingar o backend
async function pingBackend() {
  try {
    const response = await axios.get(TARGET_URL);
    console.log(`[App B] Ping pro backend: ${response.status} - ${new Date().toISOString()}`);
  } catch (error) {
    console.error(`[App B] Erro ao pingar: ${error.message}`);
    // Tentar novamente após um pequeno delay (com retry)
    setTimeout(pingBackend, 1000 * 10); // Retry em 10 segundos
  }
}

// Função que começa o ping contínuo
function startPinging() {
  console.log('🟢 App B iniciado e pingando...');
  pingBackend(); // Realiza o primeiro ping imediatamente
  setInterval(pingBackend, PING_INTERVAL); // Realiza ping a cada 4 minutos
}

startPinging(); // Inicia o processo de ping contínuo