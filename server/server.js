const express = require("express");
const morgan = require("morgan");
const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./dec-enc.js");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
const port = process.env.PORT || 3100;

const welcomeMessage =
  "Welcome to the API Home Page. Please look at the documentation to learn how to use this web service.";

app.get("/", (req, res) => res.send(welcomeMessage));

app.post("/api/GenerateJWT", (req, res) => {
  let { header, claims, key } = req.body;
  // In case, due to security reasons, if the client doesn't send a key,
  // use our default key.
  key = key || "$PraveenIsAwesome!";
  res.json(GenerateJWT(header, claims, key));
});
app.post("/api/DecodeJWT", (req, res) => {
  res.json(DecodeJWT(req.body.sJWS));
});
app.post("/api/ValidateJWT", (req, res) => {
  let { header, token, key } = req.body;
  // In case, due to security reasons, if the client doesn't send a key,
  // use our default key.
  key = key || "$PraveenIsAwesome!";
  res.json(ValidateJWT(header, token, key));
});

app.post("/api/Users/SignIn", (req, res) => {
  res.json(req.body);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
