//import json-server
const jsonServer=require('json-server')

// create json server using json-server library
const mediaPlayerServer=jsonServer.create()

// setup path/route for db.json file
const router =jsonServer.router("db.json")

// Returns middlewares used by JSON Server
const middlewre=jsonServer.defaults()

// setup port for server app
const port =4000 || process.env.PORT

// use middleware and router in server
mediaPlayerServer.use(middlewre)
mediaPlayerServer.use(router)

// server listen for request from frontend
mediaPlayerServer.listen(port,()=>{
    console.log(`Media Player Sever started at port :${port}, and waitinf for the request ..`);
})
