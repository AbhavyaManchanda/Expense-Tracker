import express from "express";
import authMiddleware from "../middleware/authMiddleware";
import { changePassword, getUser, updateUser } from "../controllers/userControllers";

const router = express.Router();



router.get("/", authMiddleware, getUser);
router.put("/change-password", authMiddleware, changePassword);
router.put("/:id", authMiddleware, updateUser);


export default router;