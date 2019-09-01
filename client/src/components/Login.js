import React, { Component } from "react";

class Login extends Component {
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
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
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
              <pre>State Data</pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
