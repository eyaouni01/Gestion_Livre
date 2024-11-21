import express from "express";
import cors from "cors";
import BookRoutes from "./routes/BookRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthorRoutes from "./routes/AuthorRoutes.js";
import CategoryRoutes from "./routes/CategoryRoutes.js";
import EventRoutes from "./routes/EventRoute.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/gestion_livres")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use("/api/v1/books", BookRoutes);
app.use("/api/v1/author", AuthorRoutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/event", EventRoutes);
export default app;
