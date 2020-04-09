let http = require('http')

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('hola!')
}).listen(8009)

console.log('Server funcionando')