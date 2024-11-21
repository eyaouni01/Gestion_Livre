import http from "http";
import app from "./app.js";

const server = http.createServer(app);
const port = process.env.PORT || 4000;

server.listen(port, (req, res) => {
  console.log("server is running on 4000");
});