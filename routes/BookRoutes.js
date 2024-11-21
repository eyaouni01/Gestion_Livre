import express from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
  createBookValid
} from "../controllers/BookController.js";

const router = express.Router();

router.get("/", getBooks);

router.get("/:id", getBookById);
router.post("/book", createBook);
//une route qui cree un livre si l'auteur a deja cree des livres avants 
router.post("/valid", createBookValid);
router.patch("/:id", updateBookById);
router.delete("/:id", deleteBookById);

export default router;