const Hospital = require("../models/Hospital");
const Psychiatrist = require("../models/Psychiatrist");
const Patient = require("../models/Patient");

const getHospitalDetails = async (req, res) => {
  try {
    const { hospitalId } = req.body;

    const hospital = await Hospital.findById(hospitalId);
    if (!hospital) {
      return res.status(404).send({ error: "Hospital not found" });
    }

    const psychiatrists = await Psychiatrist.find({
      hospital: hospitalId,
    }).populate("hospital");
    const totalPsychiatristCount = psychiatrists.length;
    let totalPatientsCount = 0;

    const psychiatristDetails = await Promise.all(
      psychiatrists.map(async (psychiatrist) => {
        const patients = await Patient.find({ psychiatrist: psychiatrist._id });
        totalPatientsCount += patients.length;
        return {
          id: psychiatrist._id,
          name: psychiatrist.name,
          patientsCount: patients.length,
        };
      })
    );

    res.send({
      hospitalName: hospital.name,
      totalPsychiatristCount,
      totalPatientsCount,
      psychiatristDetails,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getHospitalDetails };
