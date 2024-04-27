const express = require("express");
const app = express();
const horaMiddleware = require('./middlewares/horaMiddleware')
const validarHora = require ('./middlewares/validarHoras')
const endRoute = require('./rutas/endroute');



app.use(horaMiddleware)

app.get("/", (req, res) => {
  const actualTime = req.hourNow;
  res.send(`
      <h1>BIENVENIDO@</h1>
      <p>The actual time is:${actualTime}</p>
      <button>ENTER</button>
     
  `);
 
});



// app.use("/endroute", validarHora);
// app.use("/endroute", endRoute); 





app.listen(3000, () => {
  console.log("Servidor puerto 3000");
});
