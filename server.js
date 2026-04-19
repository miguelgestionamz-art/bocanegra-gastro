// =============================================
// Proxy Server para Bocanegra Gastrobar
// Sirve los archivos estáticos + proxy a la API de OpenAI
// =============================================

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// ⚠️ PON AQUÍ TU API KEY DE OPENAI
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'TU_API_KEY_AQUI';

const PORT = 8001;
const STATIC_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // API Proxy endpoint
    if (req.method === 'POST' && req.url === '/api/chat') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            // Parse the incoming request (frontend sends OpenAI format)
            const postData = Buffer.from(body, 'utf-8');

            const options = {
                hostname: 'api.openai.com',
                port: 443,
                path: '/v1/chat/completions',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Length': postData.length,
                },
            };

            const apiReq = https.request(options, (apiRes) => {
                let responseBody = '';
                apiRes.on('data', chunk => { responseBody += chunk; });
                apiRes.on('end', () => {
                    res.writeHead(apiRes.statusCode, { 'Content-Type': 'application/json' });
                    res.end(responseBody);
                });
            });

            apiReq.on('error', (err) => {
                console.error('Error llamando a OpenAI:', err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            });

            apiReq.write(postData);
            apiReq.end();
        });
        return;
    }

    // Static file serving
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = path.join(STATIC_DIR, filePath.split('?')[0]);

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 - No encontrado');
            } else {
                res.writeHead(500);
                res.end('Error del servidor');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`\n  ┌──────────────────────────────────────────┐`);
    console.log(`  │                                          │`);
    console.log(`  │   🍽️  Bocanegra Gastrobar                │`);
    console.log(`  │                                          │`);
    console.log(`  │   Servidor:  http://localhost:${PORT}      │`);
    console.log(`  │   API Proxy: /api/chat (OpenAI)          │`);
    console.log(`  │                                          │`);
    console.log(`  └──────────────────────────────────────────┘\n`);
    
    if (OPENAI_API_KEY === 'TU_API_KEY_AQUI') {
        console.log('  ⚠️  IMPORTANTE: Configura tu API key de OpenAI.');
        console.log('  Edita server.js (línea 12) o ejecuta con:');
        console.log('  $env:OPENAI_API_KEY="sk-..."; node server.js\n');
    } else {
        console.log('  ✅ API Key de OpenAI configurada.\n');
    }
});
