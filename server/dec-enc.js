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
