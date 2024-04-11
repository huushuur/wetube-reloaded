import express from "express";

const PORT = 4000;

const app = express();

// 特定のルートへのHTTP GETリクエストに対する設定
app.get("/", (req, res) => {
  return res.send("<h1>I still love you.</h1>");
});
app.get("/login", (req, res) => {
  return res.send({ messeage: "Login here." });
});

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

// サーバーを起動してリクエストを待ち受ける
app.listen(PORT, handleListening);
