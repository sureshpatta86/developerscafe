const jwt = require("jsonwebtoken");
const devuserModel = require("../model/devusermodel");
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await devuserModel.findOne({ email });
    if (!exist) {
      return res.status(400).send("User Not Exist...");
    }
    if (exist.password != password) {
      return res.status(400).send("Password Invalid...");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "jwtSecretPassword", { expiresIn: 3600000 }, (error, token) => {
      if (error) throw error;
      return res.json({ token });
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Server Error");
  }
};
module.exports = userLogin;
