import express from "express";
import mongoose from "mongoose";
import { carRouter } from "./routes/cars";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(carRouter);

// connect to mongoDB by using mongoose
mongoose.connect('mongodb://mongodb:27017/carsManagement').then(() => {
    console.log("Connected to the database!");
})
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    })

app.listen(8080);

console.log('server is running on 8080');