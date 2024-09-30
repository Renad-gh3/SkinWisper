import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import SkinTRouter from "./routes/SkinTypeRoute.js";
import ProductsRouter from "./routes/ProductsRoute.js";

// app configr
const app = express();
const port = 5000;

// middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/SkinType", SkinTRouter);
app.use("/api/Product", ProductsRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});

// mongodb+srv://SkinWis:987654321@cluster0.pavkx.mongodb.net/?
