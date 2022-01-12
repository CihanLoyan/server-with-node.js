const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html')
    

    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('Port 3000 listening');
})