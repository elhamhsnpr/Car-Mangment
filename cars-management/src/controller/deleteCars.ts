import { Request, Response } from "express";
import { Car} from "../models/cars"

// Delete an individual car by using id

const deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;

    // Delete the car data according the car id
    await Car.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Car deleted successfully.' });
};

export { deleteCar };