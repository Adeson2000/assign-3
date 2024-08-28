const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const url = req.url;

    // Home Page Route
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the Home Page');
        res.end();
    }
    // About Page Route
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the About Page');
        res.end();
    }
    // Contact Page Route
    else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the Contact Page');
        res.end();
    }
    // File Write Route
    else if (url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Failed to write file');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File has been written successfully');
                res.end();
            }
        });
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 - Page Not Found');
        res.end();
    }
});

// Server listen
server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});
