const express = require("express");
const DecEnc = require("./dec-enc.js");
const app = express();
const port = process.env.PORT || 3100;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
