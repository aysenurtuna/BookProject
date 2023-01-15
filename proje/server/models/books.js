import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    description: String,
    page: String,
    type: String,
    img: String,
});

const Book = mongoose.model("Book",bookSchema);

export default Book;