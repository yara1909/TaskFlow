import express from "express";
import cors from "cors";
import taskRoutes from "./routes/tasks.js";

import dotenv from "dotenv";
dotenv.config();
console.log("DATABASE_URL =", process.env.DATABASE_URL);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(5001, () => console.log("Server running on port 5001"));

