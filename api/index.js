const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const mocker = require("./src/helpers/mocker.js");

const PORT = process.env.PORT || 3001;

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
// .then(() => mocker());
