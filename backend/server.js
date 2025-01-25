import express from "express";
import cors from "cors";

// App config
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello from backend.");
});

// Listener
app.listen(9000, () => {
  console.log("Hello from the server side.");
});
