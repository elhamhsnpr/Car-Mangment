"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCar = exports.getAllCars = void 0;
const cars_1 = require("../models/cars");
const getAllCars = async (req, res) => {
    const cars = await cars_1.Car.find().sort('-createdAt').exec();
    return res.status(200).json({ data: cars });
};
exports.getAllCars = getAllCars;
const getCar = async (req, res) => {
    console.log('test');
    const { id } = req.params;
    const car = await cars_1.Car.findOne({ _id: id });
    if (!car) {
        return res.status(404).json({ message: `Car with id "${id}" not found.` });
    }
    return res.status(200).json({ data: car });
};
exports.getCar = getCar;
//# sourceMappingURL=getCars.js.map