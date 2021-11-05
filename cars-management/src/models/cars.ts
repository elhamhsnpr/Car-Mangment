import mongoose, { Schema, Model, Document } from 'mongoose';

// create the schema for car


// create a type representing a document in DB
type CarDocument = Document & {
    brand: string;
    color: string;
    model: string;
    year: number;
    fuelType: string;
    mileAge: number;
}


//create a Input representing according to type representing 
type CarInput = {
    brand: CarDocument['brand'];
    color: CarDocument['color'];
    model: CarDocument['model'];
    year: CarDocument['year'];
    fuelType: CarDocument['fuelType'];
    mileAge: CarDocument['mileAge'];

}

// create  a schema
const carsSchema: Schema = new Schema({
    brand: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    fuelType: {
        type: String,
        required: true
    },
    mileAge: {
        type: Number,
        required: true
    }


})

//crete  a model
const Car: Model<CarDocument> = mongoose.model<CarDocument>('Car', carsSchema);

export { Car, CarDocument, CarInput }