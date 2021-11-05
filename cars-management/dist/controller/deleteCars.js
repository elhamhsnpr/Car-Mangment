"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = void 0;
const cars_1 = require("../models/cars");
// Delete an individual car by using id
const deleteCar = async (req, res) => {
    const { id } = req.params;
    // Delete the car data according the car id
    await cars_1.Car.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Car deleted successfully.' });
};
exports.deleteCar = deleteCar;
//# sourceMappingURL=deleteCars.js.map