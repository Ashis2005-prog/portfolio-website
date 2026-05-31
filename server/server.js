import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/projects", projectRoutes);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
