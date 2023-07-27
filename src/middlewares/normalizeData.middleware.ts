import { NextFunction, Request, Response } from "express";
import fs from "fs";
import { AppError } from "../error";

export const normalizeDataMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) {
    throw new AppError("File was not sended");
  }

  fs.readFile(req.file.path, "utf8", (err, data) => {
    if (err) {
      throw new AppError("Invalid file format", 500);
    }

    const dataArrayStringWithUndefined = data.split("\n");

    const dataArrayString = dataArrayStringWithUndefined.filter(
      (line) => line && line
    );

    const dataArrayObject = dataArrayString.map((line) => {
      if (line) {
        return {
          type: line[0],
          date: line.substring(1, 26),
          product: line.substring(26, 56).trim(),
          value: line.substring(56, 66),
          seller: line.substring(66, 87),
        };
      }
    });

    res.locals.normalizedData = dataArrayObject;
    req.body = dataArrayObject;

    fs.unlink(req.file!.path, (err) => {
      if (err) {
        console.error("Erro ao excluir o arquivo temporário:", err);
      }
    });

    next();
  });
};
