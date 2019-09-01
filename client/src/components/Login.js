import React, { Component } from "react";

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
                        type="text"
                        name="Username"
                        className="form-control"
                        id="Username"
                        placeholder="Username"
                        value={this.state.Username}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Password">Password</label>
                      <input
                        type="password"
                        name="Password"
                        className="form-control"
                        id="Password"
                        placeholder="Password"
                        value={this.state.Password}
                        onChange={this.handleChange}
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
