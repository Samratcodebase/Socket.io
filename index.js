import express from "express";
import http from "http";
import { Socket } from "socket.io";

const app = express();
const httpServer = http.createServer(app);
const io = new Socket(httpServer);

app.use(express.static("./public"))
app.get("/me", (req, res) => {
  res.status(200).json({
    message: "Heiiiiiiiiii",
  });
});

io.on("Connection", (Socket) => {
  console.log(Socket.id);
});
httpServer.listen(3000, () => {
  console.log("Server is running on 3000");
});
