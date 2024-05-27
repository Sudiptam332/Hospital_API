const { body, validationResult } = require("express-validator");

const validateHospitalId = [
  body("hospitalId").notEmpty().withMessage("Hospital ID is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateHospitalId };
