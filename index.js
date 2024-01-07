const jsonServer = require('json-server')
const doctorsServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middilware = jsonServer.defaults()
const port = 4000
doctorsServer.use(middilware)
doctorsServer.use(router)
doctorsServer.listen(port,()=>{
    console.log("doctorsServer listening on the port "+port);
})