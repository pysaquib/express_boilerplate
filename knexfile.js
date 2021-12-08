const path = require("path");
require("dotenv").config({ path: path.resolve(`${__dirname}/.env`) });

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_URL,
    migrations: {
      directory: path.resolve(`${__dirname}`, "./lib/migrations"),
    },
    seeds: {
      directory: path.resolve(`${__dirname}`, "./lib/seeds"),
    },
  },
};
