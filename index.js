const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = 3001
const router = jsonServer.router('db.json')
//json-server --watch db.json --port 3001
server.use(middlewares)
server.use(router)
server.listen(port)