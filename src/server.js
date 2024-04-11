import express from "express";

const PORT = 4000;

const app = express();

// 特定のルートへのHTTP GETリクエストに対する設定
app.get("/", (req, res) => {
  return res.send("I still love you");
});
app.get("/login", (req, res) => {
  return res.send("Login here.");
});

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

// サーバーを起動してリクエストを待ち受ける
app.listen(PORT, handleListening);
