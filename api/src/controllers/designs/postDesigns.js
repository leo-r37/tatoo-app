const { Design, DesignTag, Tag } = require("../../db.js");
const generateNewId = require("../../helpers/generateNewId");

module.exports = async (req, res) => {
  try {
    if (!req.body.image)
      return res.status(400).send({ error: "image url can't be null" });

    const id = await generateNewId(Design);
    const { image, title, description, tags } = req.body;

    let instance = await Design.create({ id, image, title, description });

    if (tags) {
      tags.forEach(async (t) => {
        let dbTag = await Tag.findOne({ where: { name: t } });
        dbTag
          ? await DesignTag.create({ designId: instance.id, tagId: dbTag.id })
          : count++;
      });
    }

    instance
      ? res
          .status(201)
          .send(`Design created successfully with id ${instance.id}`)
      : res.status(500).send("error in db");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
