
import Ajv, { JSONSchemaType } from "ajv";

// create schema for validation


//create a interface representing
export interface CarsData {
  brand: string;
  color: string;
  model: string;
  year: number;
  fuelType: string;
  mileAge: number;
}

// create Json schema
const schema: JSONSchemaType<CarsData> = {
  type: "object",
  properties: {
    brand: { type: "string" },
    color: { type: "string" },
    model: { type: "string" },
    year: { type: "integer" },
    fuelType: { type: "string" },
    mileAge: { type: "integer" },

  },
  required: ["brand", "color", "model", "year", "fuelType", "mileAge"],
  additionalProperties: false
}


const ajvInstance = new Ajv({ allErrors: true });

//create validator according to schema 
const validate = ajvInstance.compile(schema)

export { validate}

