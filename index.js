
const http = require('http');
const fs = require('fs');


const PORT = 5500;


const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the Home Page');
    }

    else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the About Page');
    }

    else if (req.url === '/contact' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the Contact Page');
    }

    else if (req.url === '/file-write' && req.method === 'GET') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error writing file');
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('File created successfully');
            }
        });
    }

    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});


server.listen(5500, () => {
    console.log(`Server is listening on port ${5500}`);
});
