import jwt from "jsonwebtoken";

// Auth middleware to verify JWT token
const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  // If no token is provided, return unauthorized error
  if (!token) {
    return res.json({ success: false, message: "Not Authorized, Login Again" });
  }

  try {
    // Decode the token and attach user ID to the request body
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
