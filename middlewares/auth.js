const jwt = require("jsonwebtoken");
const restaurantService = require("../services/RestaurantServices");

// * Middleware to authenticate restaurant, and add restaurantId to req.

const restaurantAuth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Token is not provided" }); // ? 401: Unauthorized.
  }
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Token malformed" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.restaurantId = decoded.id;
    req.restaurantType = decoded.type;
    if (req.restaurantType !== "restaurant") {
      return res.status(401).json({ error: "Type is not restaurant" });
    }
    const restaurant = await restaurantService.getRestaurantById(
      req.restaurantId
    );
    if (!restaurant) {
      return res.status(401).json({ error: "Restaurant not found" });
    }
    next();
  }
	catch (error) {
    console.log(error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = {
  restaurantAuth,
};