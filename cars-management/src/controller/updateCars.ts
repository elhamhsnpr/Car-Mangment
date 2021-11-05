import { Request, Response } from "express";
import { Car, CarInput } from "../models/cars"

const updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { brand, color, model, year, fuelType, mileAge } = req.body;

    const car = await Car.findOne({ _id: id });

    if (!car) {
        return res.status(404).json({ message: `Car with id "${id}" not found.` });
    }

    // if (!name || !description) {
    //   return res.status(422).json({ message: 'The fields name and description are required' });
    // }

    await Car.updateOne({ _id: id }, { brand, color, model, year, fuelType, mileAge });

    const carUpdated = await Car.findById(id, { brand, color, model, year, fuelType, mileAge });

    return res.status(200).json({ data: carUpdated });
};

export { updateCar }