import React, { useState } from "react";
import "./auth.css";
import "../../components/login/login.css";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggle = () => {}
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-4">
            <h2 className="mb-4 text-center">Login Here</h2>
            <div className="form-data">
              <div className="forms-inputs mb-4">
                <input
                  autoComplete="off"
                  type="text"
                  name="email"
                  className="form-control"
                  onBlur={true}
                  placeholder="Enter your Username"
                />
                
              </div>
              <div className="forms-inputs mb-4">
                <input
                  autoComplete="new-password"
                  type="password"
                  name="password"
                  className="form-control"
                  onBlur={true}
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
            <span className="text-center text-secondary">Don't have an account <a href="" onClick={toggle}>signup here</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
