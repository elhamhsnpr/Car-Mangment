"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCar = exports.getAllCars = void 0;
const cars_1 = require("../models/cars");
// Read the full data of all cars
const getAllCars = async (req, res) => {
    // get the all cars data and sort the according their timestamp
    const cars = await cars_1.Car.find().sort('-createdAt').exec();
    return res.status(200).json({ data: cars });
};
exports.getAllCars = getAllCars;
// Read the full data of an individual car.
const getCar = async (req, res) => {
    const { id } = req.params;
    // get the car data according to car id
    const car = await cars_1.Car.findOne({ _id: id });
    if (!car) {
        return res.status(404).json({ message: `Car with id "${id}" not found.` });
    }
    return res.status(200).json({ data: car });
};
exports.getCar = getCar;
//# sourceMappingURL=getCars.js.map