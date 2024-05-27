const { body, validationResult } = require("express-validator");

const validatePatient = [
  body("name").notEmpty().withMessage("Name is required"),
  body("address")
    .isLength({ min: 10 })
    .withMessage("Address should be at least 10 characters"),
  body("email").isEmail().withMessage("Email should be valid"),
  body("phone")
    .isLength({ min: 11 })
    .withMessage("Phone number should be at least 10 digits plus country code"),
  body("password")
    .isLength({ min: 8, max: 15 })
    .withMessage("Password should be between 8 to 15 characters")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/\d/)
    .withMessage("Password must contain at least one number"),
  body("photo").notEmpty().withMessage("Photo is required"),
  body("psychiatristId").notEmpty().withMessage("Psychiatrist ID is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validatePatient };
