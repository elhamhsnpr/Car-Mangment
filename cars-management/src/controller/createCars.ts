import { Request, Response } from "express";
import { Car, CarInput } from "../models/cars"



// Create new car

const createCar = async (req: Request, res: Response) => {

    const { brand, color, model, year, fuelType, mileAge } = req.body;

    const carInput: CarInput = {
        brand,
        color,
        model,
        year,
        fuelType,
        mileAge
    };

    const carCreated = await Car.create(carInput)

    return res.status(200).json({ data: carCreated });

};


export { createCar };

