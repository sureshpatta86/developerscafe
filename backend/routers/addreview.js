const reviewModel = require("../model/reviewmodel");
const devuserModel = require("../model/devusermodel");

const addUserReview = async (req, res) => {
  try {
    const { taskworker, rating } = req.body;
    const exist = await devuserModel.findById(req.user.id);
    const newReview = new reviewModel({
      taskprovider: exist.fullname,
      taskworker,
      rating,
    });
    newReview.save();
    return res.status(200).send("Review updated...");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};
module.exports = addUserReview;
