"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCar = void 0;
const cars_1 = require("../models/cars");
// Update single properties of a single car
const updateCar = async (req, res) => {
    const { id } = req.params;
    const { brand, color, model, year, fuelType, mileAge } = req.body;
    // At first get car data from Car collection in database by id
    const car = await cars_1.Car.findOne({ _id: id });
    // if there is no car according to car id send status Not Found
    if (!car) {
        return res.status(404).json({ message: `Car with id "${id}" not found.` });
    }
    // update properties of a car according to car id , we can update each properties that we want
    await cars_1.Car.updateOne({ _id: id }, { brand, color, model, year, fuelType, mileAge });
    // get carUpdated data by using car id
    const carUpdated = await cars_1.Car.findById(id, { brand, color, model, year, fuelType, mileAge });
    return res.status(200).json({ data: carUpdated });
};
exports.updateCar = updateCar;
//# sourceMappingURL=updateCars.js.map