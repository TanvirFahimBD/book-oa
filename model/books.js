const mongoose = require("mongoose");

const book = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    publishedYear: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true, versionKey: false }
);

const Book = mongoose.model("Book", book);

module.exports = Book;
