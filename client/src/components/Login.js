import React, { Component } from "react";
import { GenerateJWT, DecodeJWT } from "../services/JWTService";

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
    const claims = {
      Username,
      Password
    };
    const header = {
      alg: "HS512",
      typ: "JWT"
    };
    GenerateJWT(header, claims, null, res => {
      if (res.status === 200) {
        this.setState({ Response: res.data }, () => {
          DecodeJWT(this.state.Response, data =>
            this.setState({ Data: data.data })
          );
        });
      } else {
        this.setState({ Response: "Error!" });
      }
    });
  };
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Sign In</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Please sign in to continue.
                  </h6>
                  <form onSubmit={this.handleSubmit}>
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
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
