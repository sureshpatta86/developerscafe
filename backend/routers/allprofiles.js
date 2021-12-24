const devuserModel = require("../model/devusermodel");

const allProfiles = async (req, res) => {
  try {
    let allprofiles = await devuserModel.find();
    return res.json(allprofiles);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error");
  }
};
module.exports = allProfiles;
