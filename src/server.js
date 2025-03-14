import express from "express";
import dotenv from "dotenv";
import projectsRouter from "./routes/projectsRouter.js";
import { connectDB } from "./db/config/connectDB.js";
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});

app.use('/api/projects', projectsRouter); 