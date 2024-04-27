const express = require("express");
const app = express();
const horaMiddleware = require("../middlewares/horaMiddleware");
const validarHora = require("../middlewares/validarHoras");

app.use(horaMiddleware);
app.get("/", (req, res) => {
  const actualTime = req.hourNow;
  res.send(`
  <h1>BIENVENID@</h1>
    <P>${actualTime}</P>
    <a href="/endroute">validate hour</>`);
});

app.get("/endroute", validarHora, (req, res) => {
  res.send("does it work");
});

app.listen(3000, () => {
  console.log("Server on...");
});
