// create the middleware which handle the private route
// user can go after authentication

const config = require("config");
const jwt = require("jsonwebtoken");

// middleware function
// must pass in 3 things req, res, next
// it gets the token that gets sent from the front end
function auth(req, res, next) {
  const token = req.header("x-auth-token");

  // Check for token
  if (!token) res.status(401).json({ msg: "No token, authorization denied" });

  try {
    // Verify token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
