import dotenv from "dotenv";
import userService from "../services/user.service.js";
import jwt from "jsonwebtoken";
dotenv.config();

export const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({ message: "Authorization header missing!" });
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.status(401).send({ message: "Authorization format invalid!" });
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.status(401).send({ message: "Invalid token schema!" });
    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "Token invalid or expired!" });
      }

      try {
        const user = await userService.findByIdService(decoded.id);

        if (!user || !user.id) {
          return res.status(401).send({ message: "User not found!" });
        }

        req.userId = user.id;
        return next();
      } catch (dbError) {
        return res
          .status(500)
          .send({ message: "Database error!", error: dbError.message });
      }
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal server error!", error: err.message });
  }
};
