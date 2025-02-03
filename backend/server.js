import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// App config
const app = express();

mongoose.connect(process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoints

// Get Request
app.get("/", (req, res) => {
  res.status(200).send("Hello from backend side yess.");
});

// Post Request
app.post("/", (req, res) => {
  const data = req.body;
});

// Listener
app.listen(9000, () => {
  console.log("Hello from the server side.");
});
