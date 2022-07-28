import React from "react";
import Header from "../../components/header/Header";
import ImageCarousal from "../../components/imageCarousal/ImageCarousal";
import img1 from "../../assets/1.avif";
import img2 from "../../assets/2.avif";
import img3 from "../../assets/3.avif";
import img4 from "../../assets/4.avif";

function Home() {
  return (
    <div>
      <Header />
      <ImageCarousal images={[img1, img2, img3, img4]}/>
    </div>
  );
}

export default Home;
