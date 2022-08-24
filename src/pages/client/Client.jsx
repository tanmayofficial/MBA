import React from 'react';
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import TheatresList from '../../components/theatresList/TheatresList';
import './client.css';


function Client() {

  const name = localStorage.getItem("name");

  return (
    <div>
      <Header showSearch={false} />
      <div className="main_content text-light mt-3">
        <h2>Welcome{name},</h2>
        <p className='fs-5'>please check these products below</p>

        <TheatresList />
      </div>
      <Footer />
    </div>
  );
}

export default Client