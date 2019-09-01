const JSRSASign = require("jsrsasign");

// Generation
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

const sHeader = JSON.stringify(header);
const sPayload = JSON.stringify(claims);
// Generate the JWT
const sJWT = JSRSASign.jws.JWS.sign("HS512", sHeader, sPayload, key);

const token =
  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InByYXZlZW4iLCJBZ2UiOjI3LCJGdWxsbmFtZSI6IlByYXZlZW4gS3VtYXIifQ.Nut6I57FYUGP973LgfOUNUBjMlaIm6NKk8ffgX4BTdQ_Wc2ob8m6uOwWlgoNMxpuRQaOoeFQOHhrIOJ_V8E-YA";
const algorithm = "HS512";

// Decoding
const sJWS = token;
const aJWT = sJWS.split(".");
const uHeader = JSRSASign.b64utos(aJWT[0]);
const uClaim = JSRSASign.b64utos(aJWT[1]);
const pHeader = JSRSASign.jws.JWS.readSafeJSONString(uHeader);
const pClaim = JSRSASign.jws.JWS.readSafeJSONString(uClaim);
