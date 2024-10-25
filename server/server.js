import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";

// App Config
const PORT = process.env.PORT || 4000;
const app = express();

// Initialize Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
(async () => {
  await connectDB();
})();

// API Routes
app.get("/", (req, res) => res.send("API Working Now"));
app.use("/api/user", userRouter);

app.listen(PORT, () => console.log("Server running on port " + PORT));
