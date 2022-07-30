import React from "react";
import LoaderImg from "../../assets/load.gif";

function Loader() {
  return (
    <div className="container d-flex justify-content-center align-items-center text-center">
      <img src={LoaderImg} alt="page loading" />
    </div>
  );
}

export default Loader;
