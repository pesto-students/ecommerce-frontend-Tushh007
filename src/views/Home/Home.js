import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Carousel from "../../components/carousel/Carousel";
import { bannerImages } from "./BannerData";
import { PRODUCTS } from "../../utils/products";
import ProductRow from "../../components/ProductRow/ProductRow";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
      <div className="home__categories">
        <div
          className="home__categories1"
          style={{ backgroundImage: `url(${bannerImages[0].img})` }}
        ></div>
        <div
          className="home__categories2"
          style={{ backgroundImage: `url(${bannerImages[1].img})` }}
        ></div>
        <div
          className="home__categories3"
          style={{ backgroundImage: `url(${bannerImages[2].img})` }}
        ></div>
        <div
          className="home__categories4"
          style={{ backgroundImage: `url(${bannerImages[3].img})` }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
