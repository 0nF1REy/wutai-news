import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/create", userController.create);
router.get("/", userController.findAll);
router.get("/findById", authMiddleware, userController.findById); 
router.patch("/:id", authMiddleware,  userController.update); 

export default router;