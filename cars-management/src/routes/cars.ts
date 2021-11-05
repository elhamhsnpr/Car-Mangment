import express, { Request, Response } from "express";

import { createCar } from "../controller/createCars";
import { validateDto } from "../schema/jsonValidator";
import { validate } from "../schema/carsSchema";
import { getAllCars, getCar } from "../controller/getCars";
import { updateCar} from "../controller/updateCars";
import { deleteCar } from "../controller/deleteCars";


const router = express.Router();


router.post('/car', validateDto(validate), createCar);

router.get('/cars', getAllCars);

router.get('/car/:id', getCar);

router.put('/car/:id',validateDto(validate),updateCar);

router.delete('/car/:id', deleteCar)

export { router as carRouter }