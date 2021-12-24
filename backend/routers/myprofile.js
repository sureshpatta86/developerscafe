const devuserModel = require("../model/devusermodel");

const myProfile = async (req, res) => {
  try {
    let user = await devuserModel.findById(req.user.id);
    return res.json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error");
  }
};
module.exports = myProfile;
