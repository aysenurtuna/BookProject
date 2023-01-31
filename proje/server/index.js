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

const URL = process.env.URL;

mongoose
  .connect(
    process.env.CONNECTION_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(URL, () => {
      console.log(`server is running on port: ${URL}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
