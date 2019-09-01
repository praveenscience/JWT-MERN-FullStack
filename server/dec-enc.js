const JSRSASign = require("jsrsasign");

const claims = {
  Username: "praveen",
  Age: 27,
  Fullname: "Praveen Kumar"
};

const key = "$PraveenIsAwesome!";

const header = {
  alg: "HS512",
  typ: "JWT"
};

// Stringify the header and payload objects.
const sHeader = JSON.stringify(header);
const sPayload = JSON.stringify(claims);

// Generate and log the JWT.
const sJWT = JSRSASign.jws.JWS.sign("HS512", sHeader, sPayload, key);
console.log(sJWT);
