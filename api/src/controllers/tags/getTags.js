const { Tag } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    let response = name
      ? await Tag.findOne({ where: { name } })
      : await Tag.findAll();
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
