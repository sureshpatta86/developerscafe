const reviewModel = require("../model/reviewmodel");

const myReviews = async (req, res) => {
  try {
    let allreviews = await reviewModel.find();
    let myreviews = allreviews.filter(
      (review) => review.taskworker.toString() === req.user.id.toString()
    );
    return res.status(200).json(myreviews);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error");
  }
};
module.exports = myReviews;
