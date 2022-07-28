import React from "react";
import { useNavigate } from "react-router-dom";

function Customer() {
  const navigate = useNavigate();
  const logoutFn = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="container d-flex justify-content-center text-light">
      <h3>Customer</h3>
      <div className="">
        <button className="btn btn-sm btn-warning mt-5" onClick={logoutFn}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Customer;
