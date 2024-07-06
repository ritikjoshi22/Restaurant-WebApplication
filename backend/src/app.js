import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import reservationRouter from"../routes/reservationRoute.js"
import { errorMiddleware } from "../error/error.js"

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server start at PORT:${process.env.PORT}`);
    mongoose.connect(process.env.MONGO_URI).then(() => console.log("Mongodb connected!")).catch(err => console.log("Mongodb not connected!"));
});

app.use(errorMiddleware);

export default app;
