const { Favorite } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    if (!req.body.userId || !req.body.designId)
      return res
        .status(400)
        .send({ error: "user and design IDs can't be null" });

    const { userId, designId } = req.body;

    let instance = await Favorite.create({ userId, designId });

    instance
      ? res
          .status(201)
          .send(
            `Favorite added successfully for user ID ${instance.userId} in design ID ${instance.designId}`
          )
      : res.status(500).send("error in db");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
