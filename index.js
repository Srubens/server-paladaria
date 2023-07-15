const express = require('express')
const path = require('path')
const app = express()
const jsonServer = require('json-server')
const port = 3001 

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

app.use(express.urlencoded({extended:true}))
app.listen(port,() =>{
	console.log('servidor rodando')
})