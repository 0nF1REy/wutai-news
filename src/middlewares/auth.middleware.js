import dotenv from "dotenv";
import userService from "../services/user.service.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";

dotenv.config();

const jwtVerify = promisify(jwt.verify);

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
      const decoded = await jwtVerify(token, process.env.SECRET_JWT);

      if (!decoded || !decoded.id) {
        return res.status(401).send({ message: "Invalid token payload!" });
      }

      const user = await userService.findByIdService(decoded.id);

      if (!user || !user._id) {
        return res
          .status(401)
          .send({ message: "Invalid user associated with token" });
      }

      req.user = user;
      req.userId = decoded.id;

      next();
    } catch (jwtError) {
      console.error("Erro ao verificar o token:", jwtError);
      return res.status(401).send({
        message: "Token invalid or expired!",
        error: jwtError.message,
      });
    }
  } catch (err) {
    console.error("Erro no middleware", err);
    return res
      .status(500)
      .send({ message: "Internal server error!", error: err.message });
  }
};
