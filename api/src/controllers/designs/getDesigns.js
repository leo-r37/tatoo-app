const { Design, Tag } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    let response = id
      ? await Design.findByPk(parseInt(id), {
          include: {
            model: Tag,
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        })
      : await Design.findAll({
          include: {
            model: Tag,
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        });
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
