const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const INITIAL_PORT = 3000;
const HOST = 'localhost';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

function serveFile(req, res) {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') {
    reqUrl = '/index.html';
  }

  const safePath = path.normalize(reqUrl).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h1>404 Not Found</h1><p>The requested file <code>${reqUrl}</code> was not found.</p>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache'
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  });
}

function startServer(port) {
  const server = http.createServer(serveFile);

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(port, () => {
    const serverUrl = `http://${HOST}:${port}`;
    console.log('\n============================================================');
    console.log('  ACADEMIC PORTFOLIO - MS. V. MULLI MARY, M.E., (Ph.D.)');
    console.log("  St. Xavier's Catholic College of Engineering");
    console.log('============================================================');
    console.log(`\n  Server is live at: ${serverUrl}`);
    console.log('  Press Ctrl+C to stop the server anytime.\n');

    // Auto-open in default browser on Windows
    exec(`start ${serverUrl}`, (err) => {
      if (err) {
        console.log(`  Please open ${serverUrl} in your browser.`);
      } else {
        console.log(`  Opened ${serverUrl} in your default browser.`);
      }
    });
  });
}

startServer(INITIAL_PORT);

