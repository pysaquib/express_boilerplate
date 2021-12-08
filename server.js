const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const users = require("./lib/routes/users.routes");
app.use("/users", users);

const port = process.env.PORT || "4444";
app.listen(port, () => {
  console.log(`Catch the action at http://localhost:${port}`);
});
