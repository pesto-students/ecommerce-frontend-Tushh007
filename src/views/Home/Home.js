import React from 'react';
import ProductRow from '../../components/ProductRow/ProductRow';
import { PRODUCTS } from '../../utils/products';
import Carousel from '../../components/carousel/Carousel';
import { bannerImages } from './BannerData';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <div className="home__categories">
        <div
          className="home__categories1"
          style={{ backgroundImage: `url(${bannerImages[0].img})` }}
        >
          <div className="home__tileElement">
            <button className="home__shopButton">Shop Now</button>
          </div>
        </div>
        <div
          className="home__categories2"
          style={{ backgroundImage: `url(${bannerImages[1].img})` }}
        >
          <div className="home__tileElement">
            <button className="home__shopButton">Shop Now</button>
          </div>
        </div>
        <div
          className="home__categories3"
          style={{ backgroundImage: `url(${bannerImages[2].img})` }}
        >
          <div className="home__tileElement">
            <button className="home__shopButton">Shop Now</button>
          </div>
        </div>
        <div
          className="home__categories4"
          style={{ backgroundImage: `url(${bannerImages[3].img})` }}
        >
          <div className="home__tileElement">
            <button className="home__shopButton">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="products">
        <ProductRow title="Featured Products" items={PRODUCTS} />
      </div>
    </div>
  );
};

export default Home;
