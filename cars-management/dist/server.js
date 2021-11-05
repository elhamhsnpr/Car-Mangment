"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cars_1 = require("./routes/cars");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cars_1.carRouter);
// connect to mongoDB by using mongoose
mongoose_1.default.connect('mongodb://mongodb:27017/carsManagement').then(() => {
    console.log("Connected to the database!");
})
    .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});
app.listen(8080);
console.log('server is running on 8080');
//# sourceMappingURL=server.js.map