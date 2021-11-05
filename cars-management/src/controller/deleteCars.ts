import { Request, Response } from "express";
import { Car, CarInput } from "../models/cars"

const deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;

    await Car.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Car deleted successfully.' });
};

export { deleteCar };