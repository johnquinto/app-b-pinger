const https = require('https');

const TARGET_URL = 'https://backend-express-ndpe.onrender.com';

function pingBackend() {
  https.get(TARGET_URL, (res) => {
    console.log(`[App B] Ping pro backend: ${res.statusCode} - ${new Date().toISOString()}`);
  }).on('error', (e) => {
    console.error(`[App B] Erro ao pingar: ${e.message}`);
  });
}

setInterval(pingBackend, 1000 * 60 * 4); // a cada 4 minutos

console.log('🟢 App B iniciado e pingando...');
