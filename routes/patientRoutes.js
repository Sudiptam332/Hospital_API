const express = require("express");
const { validatePatient } = require("../validations/patientValidation");
const { registerPatient } = require("../controllers/patientController");

const router = express.Router();

router.post("/register", validatePatient, registerPatient);

module.exports = router;
