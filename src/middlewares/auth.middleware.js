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

    try {
      const decoded = await jwt.verify(token, process.env.SECRET_JWT);

      if (!decoded || !decoded.id) {
        return res.status(401).send({ message: "Invalid token payload!" });
      }

      const user = await userService.findByIdService(decoded.id);

      if (!user || !user._id) {
        return res
          .status(401)
          .send({ message: "Invalid user associated with token" });
      }

      req.user = user; // Coloque o usuário inteiro no req.user
      req.id = decoded.id // Isso aqui é opcional, pois o user já tem o ID.

      return next();
    } catch (jwtError) {
      return res.status(401).send({
        message: "Token invalid or expired!",
        error: jwtError.message,
      });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Internal server error!", error: err.message });
  }
};