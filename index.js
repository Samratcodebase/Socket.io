import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(express.static("./public"));
app.get("/me", (req, res) => {
  res.status(200).json({
    message: "Heiiiiiiiiii",
  });
});

io.on("connection", (Socket) => {
  console.log("User ID:", Socket.id);
});
httpServer.listen(3000, () => {
  console.log("Server is running on 3000");
});
