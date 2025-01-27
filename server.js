import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import userRouter from "./src/routes/userRoute.js";
import productRouter from "./src/routes/productsRoute.js";

const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinary();
// middlewares

app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(port, () => console.log("server started on port : " + port));
