import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { affiliatedRouter } from "./routes/affiliated.routes";

const app: Application = express();
app.use(express.json());

/*app.use() routes here*/

const cors = require("cors");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(affiliatedRouter);

app.use(handleErrors);

export default app;
