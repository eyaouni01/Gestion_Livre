import mongoose from "mongoose";
import Book from "../models/Book.js";

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json({ data: books });
};

export const getBookById = async (req, res) => {
  const id = req.params.id;

 
  const book = await Book.findById(id)
    .populate("author")
   // .populate("category");
  res.json({ data: book });
};
//une fonction de creation d'un livre 
export const createBook = async (req, res) => {
  const newBook = new Book(req.body);  
  const savedBook = await newBook.save();
  return res.json({ data: savedBook });
};

//unr fonction de cration d'un livre si l'auteur existe deja 
export const createBookValid = async (req, res) => {
  try {
    const newBook = new Book(req.body);

    // Tenter de sauvegarder le livre (la validation se fera automatiquement)
    const savedBook = await newBook.save();
    return res.status(201).json({ data: savedBook });
  } catch (error) {
    // Gérer les erreurs de validation ou autres
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur.", error });
  }
};



export const updateBookById = async (req, res) => {

  const book = await Book.findById(req.params.id);

  if (req.body.author) {
    book.author = req.body.author;
  }

  if (req.body.categories) {
    book.categories = book.categories.concat(req.body.categories);
  }

  await book.save(); 
  return res.json({ data: book });
};

export const deleteBookById = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ msg: "book deleted" });
};
