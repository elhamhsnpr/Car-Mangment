import express, { Request, Response } from "express";

import { createCar } from "../controller/createCars";
import { validateDto } from "../schema/jsonValidator";
import { validate } from "../schema/carsSchema";
import { getAllCars, getCar } from "../controller/getCars";
import { updateCar} from "../controller/updateCars";
import { deleteCar } from "../controller/deleteCars";


const router = express.Router();

// create a new car 
router.post('/car', validateDto(validate), createCar);

//get the data of all cars
router.get('/cars', getAllCars);

//get the data of one car according to car id
router.get('/car/:id', getCar);

//update the properties of one car according to car id
router.put('/car/:id',validateDto(validate),updateCar);

//delete the one car according to  car id
router.delete('/car/:id', deleteCar)

export { router as carRouter }