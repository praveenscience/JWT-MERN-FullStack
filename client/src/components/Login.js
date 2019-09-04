import React, { Component } from "react";
import { DecodeJWT } from "../services/JWTService";
import { AuthUser } from "../services/AuthService";

class Login extends Component {
  state = {
    Username: "",
    Password: ""
  };
  handleChange = e => {
    // Here, e is the event.
    // e.target is our element.
    // All we need to do is to update the current state with the values here.
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    // Here, e is the event.
    // Let's prevent the default submission event here.
    e.preventDefault();
    // We can do something when the button is clicked.
    // Here, we can also call the function that sends a request to the server.
    // Get the username and password from the state.
    const { Username, Password } = this.state;
    // Right now it even allows empty submissions.
    // At least we shouldn't allow empty submission.
    if (Username.trim().length < 3 || Password.trim().length < 3) {
      // If either of Username or Password is empty, set an error state.
      this.setState({ Error: "You have to enter both username and password." });
      // Stop proceeding.
      return false;
    }
    // Call the authentication service from front end.
    AuthUser(Username, Password, (res, err) => {
      // If the request was an error, add an error state.
      if (err) {
        this.setState({ Error: res.response.data.Message });
      } else {
        // If there's no errors, further check if it's 200.
        if (res.status === 200) {
          // We need a JWT to be returned from the server.
          // As it stands, it doesn't currently return the JWT, as it's dummy.
          // Let's work on the server side part now to make it return the JWT.
        }
      }
    });
  };
  SignOutUser = e => {
    e.preventDefault();
    this.setState({ Response: null, Data: null });
    if (typeof Storage !== "undefined") {
      // When this component loads, check if JWT is already saved in the local storage.
      if (localStorage.getItem("JWT") !== null) {
        localStorage.removeItem("JWT");
      }
    }
  };
  componentDidMount() {
    if (typeof Storage !== "undefined") {
      // When this component loads, check if JWT is already saved in the local storage.
      if (localStorage.getItem("JWT") !== null) {
        // If there's something, try to parse and sign the current user in.
        this.setState({ Response: localStorage.getItem("JWT") });
        DecodeJWT(localStorage.getItem("JWT"), data =>
          this.setState({ Data: data.data })
        );
      }
    }
  }
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card">
                {this.state.Data ? (
                  <div className="card-body">
                    <h5 className="card-title">Successfully Signed In</h5>
                    <p className="text-muted">
                      Hello {this.state.Data.Username}! How are you?
                    </p>
                    <p className="mb-0">
                      You might want to{" "}
                      <button
                        className="btn btn-link"
                        onClick={this.SignOutUser}
                      >
                        sign out
                      </button>
                      .
                    </p>
                  </div>
                ) : (
                  <div className="card-body">
                    <h5 className="card-title">Sign In</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Please sign in to continue.
                    </h6>
                    <form onSubmit={this.handleSubmit}>
                      {this.state.Error && (
                        <div className="alert alert-danger text-center">
                          <p className="m-0">{this.state.Error}</p>
                        </div>
                      )}
                      {["Username", "Password"].map((i, k) => (
                        <div className="form-group" key={k}>
                          <label htmlFor={i}>{i}</label>
                          <input
                            type={i === "Password" ? "password" : "text"}
                            name={i}
                            className="form-control"
                            id={i}
                            placeholder={i}
                            value={this.state[i]}
                            onChange={this.handleChange}
                          />
                        </div>
                      ))}
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <pre>
                State Data
                <br />
                <br />
                {JSON.stringify(
                  {
                    Username: this.state.Username,
                    Password: this.state.Password
                  },
                  null,
                  2
                )}
                {this.state.Response && (
                  <>
                    <br />
                    <br />
                    Response Data (JWT)
                    <br />
                    <br />
                    {this.state.Response}
                  </>
                )}
                {this.state.Data && (
                  <>
                    <br />
                    <br />
                    Decoded Data
                    <br />
                    <br />
                    {JSON.stringify(this.state.Data, null, 2)}
                  </>
                )}
                {this.state.Error && (
                  <>
                    <br />
                    <br />
                    Error
                    <br />
                    <br />
                    {JSON.stringify(this.state.Error, null, 2)}
                  </>
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
