"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDto = void 0;
function validateDto(ajvValidate) {
    return (req, res, next) => {
        const valid = ajvValidate(req.body);
        if (!valid) {
            const errors = ajvValidate.errors;
            res.status(400).json(errors);
        }
        next();
    };
}
exports.validateDto = validateDto;
//# sourceMappingURL=jsonValidator.js.map