const jsonServer = require('json-server')

const ip = '127.0.0.1'
const port = 3003
const db_file = require('./db')

const server = jsonServer.create()
const router = jsonServer.router(db_file())
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.use((req, res, next) => {
  res.header('X-Hello', 'World')
  next()
})

router.render = (req, res) => {
  const result = Array.isArray(res.locals.data) ? { list: res.locals.data, total: res.locals.data.length * 10 } : { item: res.locals.data }
  res.jsonp(result)
}

server.use(router)

server.listen({
  host: ip,
  port,
}, () => {
  console.log(`JSON Server is running in http://${ip}:${port}`)
})
