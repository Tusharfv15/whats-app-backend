import express from "express";

const app = express();
app.get("/test", (req, res) => {
  res.send("Hello From Server....");
});

export default app;
