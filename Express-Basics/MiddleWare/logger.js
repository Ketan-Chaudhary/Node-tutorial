const logger = (req, res, next) => {
  const method = req.method; // GET, POST, PUT, DELETE
  const url = req.url; // /, /about, /contact
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // next is a function that is called to move to the next middleware
};

module.exports = logger;
