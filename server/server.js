const express = require("express");
const morgan = require("morgan");
const { GenerateJWT, DecodeJWT, ValidateJWT } = require("./dec-enc.js");
const Users = require("./users");

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
  const { Username, Password } = req.body;
  // Check if the Username is present in the database.
  if (typeof Users[Username] !== "undefined") {
    // Check if the password is right.
    if (Users[Username] === Password) {
      // Let's create a JWT based on our default headers.
      const header = {
        alg: "HS512",
        typ: "JWT"
      };
      // Now we need to make the claims based on Username provided by the user.
      const claims = {
        Username
      };
      // Finally, we need to have the key saved on the server side.
      const key = "$PraveenIsAwesome!";
      // Send a success message.
      // By default, the status code will be 200.
      res.json({
        Message: "Successfully Signed In!",
        JWT: GenerateJWT(header, claims, key)
      });
    } else {
      // Send a forbidden error if incorrect credentials.
      res.status(403).json({
        Message: "Invalid Username or Password!"
      });
    }
  } else {
    // Send a forbidden error if invalid username.
    res.status(403).json({
      Message: "User Not Found!"
    });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
