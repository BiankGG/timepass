const express = require("express");
const router = express.Router();
const validarHora = require("../validarHora");

router.get("/endroute", validarHora, (req, res) => {
  res.send(`<h1>BIENVENID@</h1>
  <p>We are in the enroute</p>`);
});
