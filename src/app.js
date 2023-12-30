import express from "express";
import { pool } from "./db.js";

import cors from "cors";

import employesRouter from "./routes/employes.routes.js";

const app = express();

app.use(express.json());

app.get("/ingenieria", async (req, res) => {
  res.json({ description: "Sofia is amazing and the most pretty :3" ,works: "She works in PreAcademiaIngenieria"});
});

app.use(cors());

app.use("/api/products", employesRouter);

app.get("/ping", async (req, res) => {
  const [result] = await pool.query("select 'pong' as one");
  res.json(result);
});

app.use((req, res, next) => {
  res.status(404).json({ message: "not found" });
});

export default app;
