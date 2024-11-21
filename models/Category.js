import mongoose from "mongoose";

const Category = new mongoose.Schema(
  {
    title: {
      type: String,
      enum: [
        "Fiction",
        "Non-Fiction",
        "Science",
        "History",
        "Biography",
        "Fantasy",
        "Mystery",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", Category);
