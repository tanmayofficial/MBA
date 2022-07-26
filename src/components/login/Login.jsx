import React, { useState } from "react";
import "./login.css";

function Login(props) {
  const { onLoginSubmit, goToSignup, loginMessage, errorMessageSignup } = props;
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    const data = [userId,password];
    onLoginSubmit(data);
    e.preventDefault();
  }

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-4">
            <h2 className="mb-4 text-center">Login Here</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-data">
                <div className="forms-inputs mb-4">
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    value={userId}
                    onChange={(e) => {
                      setUserId(e.target.value);
                    }}
                    placeholder="Enter your Username"
                  />
                </div>
                <div className="forms-inputs mb-4">
                  <input
                    autoComplete="new-password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="Enter your Password"
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-dark w-100">
                    Login
                  </button>
                </div>
              </div>
              <div className="success-data">
                <div className="text-center d-flex flex-column">
                  <i className="bx bxs-badge-check"></i>
                </div>
              </div>
              <span className="text-center text-secondary">
                Don't have an account? &nbsp;
                <a href="#" onClick={goToSignup}>
                  signup here
                </a>
              </span>
              <div className="error-msg text-danger m-1">
                {errorMessageSignup}
              </div>
            </form>
              <div className="text-success text-center m-1">{loginMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
