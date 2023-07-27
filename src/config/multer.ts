import multer from "multer";
import path from "path";
import { AppError } from "../error";
import { Request } from "express";

export const multerConfig = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve("src", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  fileFilter: (req: Request, file: any, callback: any) => {
    const allowedMimes = ["text/plain"];
    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(
        new AppError(
          "Invalid file type. Only text files (.txt) are allowed.",
          400
        )
      );
    }
  },
};

export const uploadDoc = multer(multerConfig);
