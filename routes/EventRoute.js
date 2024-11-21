
import express from "express";
import { createEvent } from "../controllers/EventController.js";


const router = express.Router();

// Route pour créer un événement
router.post("/", createEvent );



export default router;