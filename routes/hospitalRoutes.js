const express = require("express");
const { validateHospitalId } = require("../validations/hospitalValidation");
const { getHospitalDetails } = require("../controllers/hospitalController");

const router = express.Router();

router.post("/details", validateHospitalId, getHospitalDetails);

module.exports = router;
