import express from "express";
import type { Application } from "express";

const app: Application = express();

app.get("/", (req, res) => {
  console.log("Logged");
});


