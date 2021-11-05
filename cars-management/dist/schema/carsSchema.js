"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const ajv_1 = __importDefault(require("ajv"));
const schema = {
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
};
// validate is a type guard for MyData - type is inferred from schema type
const ajvInstance = new ajv_1.default({ allErrors: true });
const validate = ajvInstance.compile(schema);
exports.validate = validate;
//# sourceMappingURL=carsSchema.js.map