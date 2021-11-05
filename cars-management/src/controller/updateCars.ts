import { Request, Response } from "express";
import { Car, CarInput } from "../models/cars"

//Update single properties of a single car

const updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { brand, color, model, year, fuelType, mileAge } = req.body;

    // At first get car data from Car collection in database by id
    const car = await Car.findOne({ _id: id });

    //if there is no car according to car id send status Not Found
    if (!car) {
        return res.status(404).json({ message: `Car with id "${id}" not found.` });
    }

    // update properties of a car according to car id , we can update each properties that we want
    await Car.updateOne({ _id: id }, { brand, color, model, year, fuelType, mileAge });

    // get carUpdated data by using car id
    const carUpdated = await Car.findById(id, { brand, color, model, year, fuelType, mileAge });

    return res.status(200).json({ data: carUpdated });
};

export { updateCar }