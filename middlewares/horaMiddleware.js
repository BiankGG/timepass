const hoursMiddleware = (req, res, next) => {
  const dateForHour = new Date();
  const hours = dateForHour.getHours();
  const minutes = dateForHour.getMinutes();
  const seconds = dateForHour.getSeconds();
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  req.hourNow = formattedTime;
  console.log(req.hourNow);
  next();
};

module.exports =  hoursMiddleware ;
