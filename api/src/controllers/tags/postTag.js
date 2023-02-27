const { Tag } = require("../../db.js");
const generateNewId = require("../../helpers/generateNewId");

module.exports = async (req, res) => {
  try {
    if (!req.body.name)
      return res.status(400).send({ error: "name can't be null" });

    const id = await generateNewId(Tag);
    const { name } = req.body;

    let instance = await Tag.create({ id, name });

    instance
      ? res.status(201).send(`Tag created successfully with id ${instance.id}`)
      : res.status(500).send("error in db");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
