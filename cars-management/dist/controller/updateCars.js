"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCar = void 0;
const cars_1 = require("../models/cars");
const updateCar = async (req, res) => {
    const { id } = req.params;
    const { brand, color, model, year, fuelType, mileAge } = req.body;
    const car = await cars_1.Car.findOne({ _id: id });
    if (!car) {
        return res.status(404).json({ message: `Car with id "${id}" not found.` });
    }
    // if (!name || !description) {
    //   return res.status(422).json({ message: 'The fields name and description are required' });
    // }
    await cars_1.Car.updateOne({ _id: id }, { brand, color, model, year, fuelType, mileAge });
    const carUpdated = await cars_1.Car.findById(id, { brand, color, model, year, fuelType, mileAge });
    return res.status(200).json({ data: carUpdated });
};
exports.updateCar = updateCar;
//# sourceMappingURL=updateCars.js.map