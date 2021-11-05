"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCar = void 0;
const cars_1 = require("../models/cars");
// Create new car
const createCar = async (req, res) => {
    const { brand, color, model, year, fuelType, mileAge } = req.body;
    const carInput = {
        brand,
        color,
        model,
        year,
        fuelType,
        mileAge
    };
    // Inset the new car properties in Car collection
    const carCreated = await cars_1.Car.create(carInput);
    return res.status(200).json({ data: carCreated });
};
exports.createCar = createCar;
//# sourceMappingURL=createCars.js.map