import express from "express";
import { createCategory } from "../controllers/CategoryController.js";

const router = express.Router();

router.post("/", createCategory);
export default router;
