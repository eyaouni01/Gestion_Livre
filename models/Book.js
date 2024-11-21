import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    publicationDate: {
      type: Date,
    },
    categories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Category",
    },
    pages: {
      type: Number,
    },
    publisher: {
      type: String,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    stockQuantity: {
      type: Number,
      default: 0,
      min: 0,
    },
    languages: {
      type: [String],
    },
    ratings: {
      type: Number,
      min: 0,
      max: 5,
    },
    isDigital: {
      type: Boolean,
    },
    copiesSold: {
      type: Number,
      default: 0,
      min: 0,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
      validate: {
        validator: async function (authorId) {
          // Vérifier si cet auteur a déjà écrit un livre
          const books = await mongoose.model("Book").countDocuments({ author: authorId });
          return books > 0; // Retourne true si l'auteur a des livres
        },
        message: "L'auteur doit avoir écrit au moins un livre avant d'en ajouter un nouveau.",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", BookSchema);
