import React from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import './client.css';
import Theatres from '../../components/theatresList/Theatres';


function Client() {
  
  const name = localStorage.getItem("name");

  return (
    <div>
      <Header showSearch={false}/>
      <div className="main_content text-light mt-3">
        <h2>Welcome{name},</h2>
        <p className='fs-5'>please check these products below</p>

        <Theatres /> 
      </div>
      <Footer />
    </div>
  );
}

export default Client