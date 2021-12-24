const devuserModel = require("../model/devusermodel");

const userRegistration = async (req, res) => {
  try {
    const { fullname, email, mobile, skill, password, confirmpassword } =
      req.body;
    const exist = await devuserModel.findOne({ email });
    if (exist) {
      return res.status(400).send("User Already Registered...");
    }
    if (password != confirmpassword) {
      return res.status(400).send("Password not valid...");
    }
    let newUser = new devuserModel({
      fullname,
      email,
      mobile,
      skill,
      password,
      confirmpassword,
    });
    newUser.save();
    return res.status(200).send("User Registered");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error");
  }
};
module.exports = userRegistration;
