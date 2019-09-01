import React, { Component } from "react";

class Login extends Component {
  state = {
    Username: "",
    Password: ""
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
                  <form>
                    <div className="form-group">
                      <label htmlFor="Username">Username</label>
                      <input
                        type="Username"
                        className="form-control"
                        id="Username"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="Password"
                        placeholder="Password"
                      />
                    </div>
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
                {JSON.stringify(this.state, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
