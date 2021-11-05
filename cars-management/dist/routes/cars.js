"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRouter = void 0;
const express_1 = __importDefault(require("express"));
const createCars_1 = require("../controller/createCars");
const jsonValidator_1 = require("../schema/jsonValidator");
const carsSchema_1 = require("../schema/carsSchema");
const getCars_1 = require("../controller/getCars");
const updateCars_1 = require("../controller/updateCars");
const deleteCars_1 = require("../controller/deleteCars");
const router = express_1.default.Router();
exports.carRouter = router;
router.post('/car', (0, jsonValidator_1.validateDto)(carsSchema_1.validate), createCars_1.createCar);
router.get('/cars', getCars_1.getAllCars);
router.get('/car/:id', getCars_1.getCar);
router.put('/car/:id', (0, jsonValidator_1.validateDto)(carsSchema_1.validate), updateCars_1.updateCar);
router.delete('/car/:id', deleteCars_1.deleteCar);
//# sourceMappingURL=cars.js.map