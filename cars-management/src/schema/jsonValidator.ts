import { Request, Response, NextFunction } from "express";

// create  validator function by using ajv validator.
// this function check the request body according the schema 
//for example: type of brand is string if request body is integer type we will get
// error or we have typo error in request body (ex: bran ) we will get error. 

function validateDto(ajvValidate: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const valid = ajvValidate(req.body);
    if (!valid) {

      const errors = ajvValidate.errors;
      res.status(400).json(errors);
    }
    next();
  };
}

export { validateDto }
