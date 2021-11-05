// import { Request, Response } from "express";
// // // import {CarsData} from "./cars"
// import Ajv from "ajv";
// // const ajvInstance = new Ajv({ allErrors: true });
// // import Ajv, { JSONSchemaType } from "ajv";
// // import { carSchema } from "../schema/carsSchema";
// // // const = new Ajv({ allErrors: true });
// // function validateDto<T>(schema: object){
// //     const isValid = this.ajv.validate(schema )
// //     if (!isValid) {
// //       const errorMessages = this.ajv.errorsText()
// //       throw new Error(`Validation Error. ${errorMessages}`)
// //     }
// //     // return data
// //   }
// // function validateDto(ajvValidate: object) {
// //     return (req: Request, res: Response) => {
// //         const valid = ajvValidate(req.body);
// //         if (!valid) {
// //             // it is imperative that the reference to the errors is copied
// //             // the next time ajv runs the errors object could be overridden
// //             // because under the hood it is just a pointer
// //             // that's why the reference needs to be copied in the same execution
// //             // block. Note that Node is single-threaded and you do not have
// //             // concurrency
// //             // in this simple example it would work without copying
// //             // simply because we are directly terminating the request with
// //             // res.status(400).json(...)
// //             // but in general copying the errors reference is crucial
// //             const errors = ajvValidate.errors;
// //             res.status(400).json(errors);
// //         }
// //     };
// // }
// // function validateDto <T> (schema : object, data : T) :T {
// //   const ajv = new Ajv()
// //   const validate = ajv.compile(carSchema)
// //   return (req, res, next) => {
// //     const validation = validate(schema, req[data])
// //     if (!validation) {
// //       return res.status(400).json({success: validation, error: validate.errors[0].message})
// //     }
// //     return next()
// //   }
// // }
// // export  {validateDto};
// import Ajv from "ajv";
// const ajvInstance = new Ajv({ allErrors: true });
// export function isValid(schema: string) {
//   const validate = ourAJVObject.getSchema(schema);
//   if (!validate) {
//     throw new Error(`No validation found for schema "${schema}"`);
//   }
//   return (ctx: Context, next: () => Promise<any>) => {
//     if (validate(ctx.request.body)) {
//       return next();
//     } else if (validate.errors) {... }
//   }
//# sourceMappingURL=validatorDto.js.map