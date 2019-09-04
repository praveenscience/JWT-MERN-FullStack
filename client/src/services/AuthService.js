import axios from "axios";

export const AuthUser = (Username, Password, cb) => {
  axios
    .post("/api/Users/SignIn", {
      Username,
      Password
    })
    .then(function(res) {
      cb(res);
    })
    .catch(function(err) {
      cb(err, true);
    });
};
