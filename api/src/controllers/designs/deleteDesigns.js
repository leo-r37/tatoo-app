const { Design } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    let deleted = await Design.destroy({
      where: { id },
    });

    deleted
      ? res.send(`design deleted successfully`)
      : res.status(500).send("db error");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
