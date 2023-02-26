const { User } = require("../../db.js");
const generateNewId = require("../../helpers/generateNewId");

module.exports = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password || !req.body.email)
      return res
        .status(400)
        .send({ error: "username, password or email can't be null" });

    const id = await generateNewId(User);
    const { username, password, email, telNumber } = req.body;

    let instance = await User.create({
      id,
      username,
      password,
      email,
      telNumber,
    });

    instance
      ? res.status(201).send(`User created successfully with id ${instance.id}`)
      : res.status(500).send("error in db");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
