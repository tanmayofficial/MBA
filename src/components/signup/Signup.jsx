import React, { useState } from "react";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import { ROLES } from "../../constants/userRoles";
import "./signup.css";

function Signup(props) {
  const { onSignupSubmit, goToLogin, errorMessageSignup } = props;
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState(ROLES.CUSTOMER);

  const handleSubmit = (e) => {
    // 1. create the data  object
    // 2. call the onLoginSubmit with data
    // 3. e. prevent default to prevent submit
    const data = { userId, password, name: userName, email, userType };
    onSignupSubmit(data);
    e.preventDefault();
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-4">
            <h2 className="mb-4 text-center">Signup Here</h2>
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
                    placeholder="Enter your User ID"
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
                <div className="forms-inputs mb-4">
                  <input
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    placeholder="Enter a User Name"
                  />
                </div>
                <div className="forms-inputs mb-4">
                  <input
                    autoComplete="off"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter your Email Id"
                  />
                </div>
                <div className="forms-inputs mb-4">
                  {/* <label>User Type: </label>
                  <DropdownButton
                    align="end"
                    title={userType}
                    id="userType"
                    className="form-control m-1"
                    onSelect={(val) => {
                      setUserType(val);
                    }}
                    variant="light"
                  >
                    <Dropdown.Item eventKey={ROLES.CUSTOMER}>
                      {ROLES.CUSTOMER}
                    </Dropdown.Item>
                    <Dropdown.Item eventKey={ROLES.CLIENT}>
                      {ROLES.CLIENT}
                    </Dropdown.Item>
                  </DropdownButton> */}

                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setUserType(e.target.val);
                    }}
                  >
                    <option defaultValue>User type</option>
                    <option value={ROLES.CUSTOMER}>{ROLES.CUSTOMER}</option>
                    <option value={ROLES.CLIENT}>{ROLES.CLIENT}</option>
                    <option value={ROLES.ADMIN}>{ROLES.ADMIN}</option>
                  </select>
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
              <div className="text-center text-secondary">
                Already a user? &nbsp;
                <a href="#" onClick={goToLogin}>
                  login here
                </a>
              </div>
            </form>
            <div className="error-msg text-center text-danger m-1">
              {errorMessageSignup}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
