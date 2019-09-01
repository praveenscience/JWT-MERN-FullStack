const express = require("express");
const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./dec-enc.js");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3100;

const welcomeMessage =
  "Welcome to the API Home Page. Please look at the documentation to learn how to use this web service.";

app.get("/", (req, res) => res.send(welcomeMessage));

app.post("/api/GenerateJWT", (req, res) => res.send(""));
app.post("/api/DecodeJWT", (req, res) => res.send(""));
app.post("/api/ValidateJWT", (req, res) => res.send(""));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
