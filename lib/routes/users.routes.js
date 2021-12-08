const express = require("express");
const router = express.Router();

const connection =
  require("../../knexfile")[process.env.NODE_ENV || "development"];
const database = require("knex")(connection);

router.get("/:id", async (req, res) => {
  console.log("HELLo");
  const data = await database("users").where("id", req.params.id);
  res.send(data);
});

router.post("/", async (req, res) => {
  const insert = await database.insert(req.body).into("users");
  if (insert) {
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
});

router.delete("/:id", async (req, res) => {
  const del = await database.delete().where("id", req.params.id).from("users");
  if (del) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

router.put("/:id", async (req, res) => {
  const update = await database
    .update(req.body)
    .where("id", req.params.id)
    .from("users");
  if (update) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
