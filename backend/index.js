const {Server} = require("socket.io");
const http = require("http");

const httpServer = http.createServer();

const io = new Server(httpServer,{
    cors:{
        origin:["http://localhost:8080"]
    }
})
io.on('connection',(socket)=>{
    console.log(socket.id);
  
    socket.on('sentMessage',(message)=>{
        socket.broadcast.emit("recievedMessage",message);
    }) 
})




httpServer.listen(3000)
