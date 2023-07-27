import express, { Application } from "express";
import { handleErrors } from "./error";
import "express-async-errors";

const app: Application = express();
app.use(express.json());

/*app.use() routes here*/

app.use(handleErrors);

export default app;
