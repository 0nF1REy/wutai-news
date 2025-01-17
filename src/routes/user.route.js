import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js"; // Importe o middleware

const router = Router();

router.post("/create", userController.create);
router.get("/", userController.findAll);
router.get("/findById", authMiddleware, userController.findById); // Middleware aqui!
router.patch("/:id", authMiddleware,  userController.update); // Mantenha o middleware aqui também

export default router;