import express from "express";
import { mongoose } from "mongoose";
import apiRoute, { apiProtected } from "./routes/api.js";
import { DB_CONNECT } from "./utils/constants.js";
import AuthMiddleware from "./middlewares/AuthMiddleware.js";
import cors from "cors";

const app = express();
app.use(express.json());

mongoose.connect(DB_CONNECT);
app.use(cors());
app.use("/api/", apiRoute);
app.use("/api/", AuthMiddleware, apiProtected);

const PORT = 8000;

app.listen(PORT, () => console.log("Server Is Running"));
