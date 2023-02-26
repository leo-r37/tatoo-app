const { Design } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    let { id } = req.params;
    let response = id
      ? await Design.findByPk(parseInt(id))
      : await Design.findAll();
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
