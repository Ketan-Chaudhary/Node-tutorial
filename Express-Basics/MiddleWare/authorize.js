const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "mohan") {
    req.user = { name: "mohan", id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorized User");
  }
};

module.exports = authorize;
