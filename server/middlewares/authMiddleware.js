// const jwt = require("jsonwebtoken");
// const User = require("../models/UserSchema");
// require("dotenv").config();

// exports.protect = async (req, res, next) => {
//   let token;

//   // Extract token from headers
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     token = req.headers.authorization.split(" ")[1];
//     console.log("Token from headers:", token);
//   }

//   // Check if token exists
//   if (!token) {
//     console.log("No token found in headers");
//     return res.status(401).json({ message: "Not authorized, no token" });
//   }

//   try {
//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log('Decoded token:', decoded);

//     // Attach user to request object
//     req.user = await User.findById(decoded.id).select("-password");
//     if(!req.user){
//     console.log('User not found for token'); // Log invalid user
//       return res.status(401).json({ message: 'Not authorized, invalid user' });
//     }
//     next();
//   } catch (error) {
//     console.error('Token verification failed:', error);
//     res.status(401).json({ message: "Not authorized, token failed" });
//   }
// };


// ================================
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
require("dotenv").config();

exports.protect = async (req, res, next) => {
  let token;

  // Extract token from headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("Token from headers:", token);
  }

  // Check if token exists
  if (!token) {
    console.log("No token found in headers");
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);

    // Attach user to request object
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      console.log('User not found for token');
      return res.status(401).json({ message: 'Not authorized, invalid user' });
    }
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};