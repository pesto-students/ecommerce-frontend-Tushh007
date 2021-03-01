import React from "react";
import Navbar from "../../components/navbar/Navbar"
import Carousel from "../../components/carousel/Carousel";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel />

    </div>
  );
};

export default Home;
