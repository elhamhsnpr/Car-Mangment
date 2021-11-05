
import Ajv, { JSONSchemaType } from "ajv";



export interface CarsData {
  brand: string;
  color: string;
  model: string;
  year: number;
  fuelType: string;
  mileAge: number;
}

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

// validate is a type guard for MyData - type is inferred from schema type
const ajvInstance = new Ajv({ allErrors: true });
const validate = ajvInstance.compile(schema)

export { validate}

