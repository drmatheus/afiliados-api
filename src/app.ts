import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";
import { affiliatedRouter } from "./routes/affiliated.routes";
import { loginRoutes } from "./routes/login.routes";
import { userRoutes } from "./routes/users.routes";

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
app.use(cors());

app.use("/affiliated", affiliatedRouter);
app.use("/login", loginRoutes);
app.use("/users", userRoutes);

app.use(handleErrors);

export default app;
