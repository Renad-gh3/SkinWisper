import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import SkinTRouter from "./routes/SkinTypeRoute.js";

// app configr
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/SkinType", SkinTRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});

// mongodb+srv://SkinWis:987654321@cluster0.pavkx.mongodb.net/?
