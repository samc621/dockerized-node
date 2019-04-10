import userController from "./controller";
import express from "express";
const router = express.Router();

router.post("/register", userController.register);

export default router;
