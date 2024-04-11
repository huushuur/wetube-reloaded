import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

app.get("/", logger, handleHome);

const handleLogin = (req, res) => {
  return res.send({ messeage: "Login here." });
};

app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

// サーバーを起動してリクエストを待ち受ける
app.listen(PORT, handleListening);
