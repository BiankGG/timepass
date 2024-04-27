const hoursMiddleware = require("./horaMiddleware");

function validarHora(req, res, next) {
  const validateHour = req.hourNow;
  if (validateHour >= 12 && validateHour < 24) {
    next();
  } else {
    res.send("not 12 yet!");
  }
}

module.exports = validarHora;
