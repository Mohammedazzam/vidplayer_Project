var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './dist/',
    port: 8000
});

server.start(function () {
    console.log('server Started At ', server.port);
});