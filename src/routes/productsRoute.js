import express from "express";
import {
  addProduct,
  listProduct,
  deletProduct,
  singleProduct,
} from "../src/controllers/productsController.js";
import upload from "../src/middlware/multer.js";
import adminAuth from "../src/middlware/adminAuth.js";

const productRouter = express.Router();

productRouter.get("/list", listProduct);
productRouter.get("/single", singleProduct);
productRouter.post("/add", adminAuth, upload, addProduct);
productRouter.delete("/delete", adminAuth, deletProduct);

export default productRouter;
