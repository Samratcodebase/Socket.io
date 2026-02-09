import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(express.static("public"));
app.get("/me", (req, res) => {
  res.status(200).json({
    message: "Heiiiiiiiiii",
  });
});

io.on("connection", (socket) => {
  // lowercase
  console.log("User Connected", socket.id);

  socket.on("client-message", (msg) => {
    console.log("Received from client:", msg);
    io.emit("server-message", msg);
  });
});
httpServer.listen(3000, () => {
  console.log("Server is running on 3000");
});
