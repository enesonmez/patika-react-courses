const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.send("hello");
});

let lastColor = "#282c34";

io.on("connection", (socket) => {
  console.log("kullanıcı bağlandı...");
  socket.emit("receive", lastColor);

  socket.on("newColor", (color) => {
    console.log(color);

    lastColor = color;
    socket.broadcast.emit("receive", color);
  });

  socket.on("disconnect", () => {
    console.log("kullanıcı ayrıldı...");
  });
});

server.listen(3001, ()=> console.log('Server is up (port:3001)'))