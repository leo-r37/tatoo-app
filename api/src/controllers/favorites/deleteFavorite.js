const { Favorite } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    if (!req.body.userId || !req.body.designId)
      return res
        .status(400)
        .send({ error: "user and design IDs can't be null" });

    const { userId, designId } = req.body;

    let deleted = await Favorite.destroy({ where: { userId, designId } });

    deleted
      ? res.send(`favorite deleted successfully`)
      : res.status(500).send("db error");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
