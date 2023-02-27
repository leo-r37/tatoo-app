const { Tag, Design } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    const { name } = req.query;
    let response = name
      ? await Tag.findOne({
          where: { name },
          include: {
            model: Design,
            attributes: ["id", "image", "title", "description"],
            through: { attributes: [] },
          },
        })
      : await Tag.findAll({
          include: {
            model: Design,
            attributes: ["id", "image", "title", "description"],
            through: { attributes: [] },
          },
        });
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
