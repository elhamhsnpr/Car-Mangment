import { Request, Response } from "express";
import { Car} from "../models/cars"

// Delete an individual car by using id

const deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;

    // At first get car data from Car collection in database by id
    const car = await Car.findOne({ _id: id });

    // if there is no car according to car id send status Not Found
    if (!car) {
        return res.status(404).json({ message: `Car with id "${id}" not found.` });
    }

    // Delete the car data according the car id
    await Car.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Car deleted successfully.' });
};

export { deleteCar };