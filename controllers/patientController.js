const bcrypt = require("bcryptjs");
const Patient = require("../models/Patient");

exports.registerPatient = async (req, res) => {
  try {
    const { name, address, email, phone, password, photo, psychiatristId } =
      req.body;

    if (
      !name ||
      !address ||
      !email ||
      !phone ||
      !password ||
      !photo ||
      !psychiatristId
    ) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const patient = new Patient({
      name,
      address,
      email,
      phone,
      password: hashedPassword,
      photo,
      psychiatrist: psychiatristId,
    });

    await patient.save();
    res.status(201).send(patient);
  } catch (error) {
    res.status(400).send(error);
  }
};
