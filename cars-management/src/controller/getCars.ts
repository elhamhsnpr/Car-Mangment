import { Request, Response } from "express";
import { Car} from "../models/cars";

//Read the full data of all cars
const getAllCars = async (req: Request, res: Response) => {

  // get the all cars data and sort the according their timestamp
  const cars = await Car.find().sort('-createdAt').exec();

  return res.status(200).json({ data: cars });
};


//Read the full data of an individual car.

const getCar = async (req: Request, res: Response) => {

  const { id } = req.params;

  // get the car data according to car id
  const car = await Car.findOne({ _id: id });

  if (!car) {
    return res.status(404).json({ message: `Car with id "${id}" not found.` });
  }

  return res.status(200).json({ data: car });
};

export { getAllCars, getCar };