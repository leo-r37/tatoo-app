const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;
const mocker = require("./src/helpers/mocker.js");

// Syncing all the models at once.
conn
  .sync({
    // force: true,
    // alter: true
  })
  .then(
    () => {
      console.log("Database: 🟢");
    },
    (error) => {
      console.log("Database: 🔴");
      console.log("🛑 Error: ", error);
    }
  )
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server:   🟢", "( port:", PORT, ")"); // eslint-disable-line no-console
    });
  })
  .then(() => mocker());
