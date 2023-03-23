import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./routes/books.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", bookRoutes);

const PORT = process.env.PORT;

mongoose
  .connect(
    process.env.CONNECTION_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
