import express from "express";
import {
    createAuthor
} from "../controllers/AuthorController.js";

const router = express.Router();

router.post("/", createAuthor);




export default router;
