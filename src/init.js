import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Server listening on http://localhost:${PORT} 🚀`);

// サーバーを起動してリクエストを待ち受ける
app.listen(PORT, handleListening);