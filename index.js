import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import emailRoutes from "./routes/emailRoutes.js";
import multer from "multer";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const upload = multer();

app.use("/sendemail", upload.array("uploadedFiles"), emailRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening at localhost:${PORT}`);
});
