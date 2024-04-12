import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
  console.log("I will respond.");
  return res.send("hello");
};

const handleLogin = (req, res) => {
  return res.send({ messeage: "Login here." });
};

app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

// サーバーを起動してリクエストを待ち受ける
app.listen(PORT, handleListening);
