const { User } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (req.body.admin)
      return res.status(400).send({ error: "Can't modify a user's role" });

    let updated = await User.update(req.body, {
      where: { id },
    });

    updated
      ? res.send(`update successfully in user with id ${id}`)
      : res.status(500).send("db error");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
