import React from "react";
import LoaderImg from "../../assets/load.gif";

function Loader() {
  return (
    <div className="container">
      <img src={LoaderImg} alt="page loading" />
    </div>
  );
}

export default Loader;
