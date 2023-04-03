const { Design, Tag, DesignTag, User, Favorite } = require("../db");

async function mocker() {
  ////////////////// Diseños //////////////////////
  await Design.bulkCreate([
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/512/2606/2606690.png",
      title: "Tatuaje 1",
      description: "El diseño de un tatuaje",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/512/2606/2606690.png",
      title: "Tatuaje 2",
      description: "El diseño de un tatuaje",
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/512/2606/2606690.png",
      title: "Tatuaje 3",
      description: "El diseño de un tatuaje",
    },
  ]);

  ///////////////// Tags - Etiquetas /////////////////////////////
  await Tag.bulkCreate([
    { id: 1, name: "tatoo" },
    { id: 2, name: "dibujo" },
    { id: 3, name: "corazones" },
    { id: 4, name: "anclas" },
    { id: 5, name: "tribales" },
  ]);

  ///////////////// DesignTag /////////////////////////////
  await DesignTag.bulkCreate([
    { designId: 1, tagId: 1 },
    { designId: 1, tagId: 2 },
    { designId: 1, tagId: 3 },
    { designId: 2, tagId: 1 },
    { designId: 2, tagId: 2 },
    { designId: 3, tagId: 1 },
  ]);

  ////////////////// Users //////////////////////
  await User.bulkCreate([
    {
      id: 1,
      username: "user1",
      password: "pass1",
      email: "email1@email.com",
      telNumber: "15000000",
      admin: false,
    },
    {
      id: 2,
      username: "user2",
      password: "pass2",
      email: "email2@email.com",
      telNumber: "15000000",
      admin: false,
    },
    {
      id: 3,
      username: "user3",
      password: "pass3",
      email: "email3@email.com",
      telNumber: "15000000",
      admin: false,
    },
    {
      id: 4,
      username: "user4",
      password: "pass4",
      email: "email4@email.com",
      telNumber: "15000000",
      admin: false,
    },
    {
      id: 5,
      username: "user5",
      password: "pass5",
      email: "email5@email.com",
      telNumber: "15000000",
      admin: false,
    },
  ]);

  ///////////////// Favorite /////////////////////////////
  await Favorite.bulkCreate([
    { userId: 1, designId: 1 },
    { userId: 1, designId: 2 },
    { userId: 1, designId: 3 },
    { userId: 2, designId: 1 },
    { userId: 2, designId: 2 },
    { userId: 3, designId: 1 },
  ]);
}

module.exports = async () => {
  mocker();
  console.log("Mocks:    🟢");
};
