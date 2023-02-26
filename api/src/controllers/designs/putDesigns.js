const { Design } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    let updated = await Design.update(req.body, {
      where: {
        id,
      },
    });

    updated
      ? res.send(`update successfully in design with id ${id}`)
      : res.status(500).send("db error");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
