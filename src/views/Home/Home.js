import React from 'react';
import ProductRow from '../../components/ProductRow/ProductRow';
import Carousel from '../../components/carousel/Carousel';
import { bannerImages } from './BannerData';
import translate from '../../utils/i18n/translate';
import { useHistory } from 'react-router-dom';
import './Home.scss';
import FAKEDATA from '../../utils/fakeData';
import ProductCard from '../../components/productCard/ProductCard';

const Home = () => {
  const history = useHistory();
  const translator = (item) =>
    translate(item) === item ? item : translate(item);
  return (
    <div className="home">
      <Carousel />

      <div className="home__categories">
        <div
          className="home__categories1"
          style={{ backgroundImage: `url(${bannerImages[0].img})` }}
        >
          <div className="home__categories1__content">
            <h1 className="home__categories1__title">
              {translator('PARTY WEAR')}
            </h1>
            <p className="home__categories1__text">
              {translator('Dress up for parties with the spirit of passion')}
            </p>
            <button
              className="home__categories1__button"
              onClick={(e) => history.push('/category/party%20wear')}
            >
              {translator('SHOP NOW')}
            </button>
          </div>
        </div>
        <div
          className="home__categories2"
          style={{ backgroundImage: `url(${bannerImages[1].img})` }}
        >
          <div className="home__categories1__content">
            <h1 className="home__categories1__title">
              {translator('CASUAL WEAR')}
            </h1>
            <p className="home__categories1__text">
              {translator(
                'Redefine your fashion with these stunning casual wear'
              )}
            </p>
            <button
              className="home__categories1__button"
              onClick={(e) => history.push('/category/casual%20wear')}
            >
              {translator('SHOP NOW')}
            </button>
          </div>
        </div>
        <div
          className="home__categories3"
          style={{ backgroundImage: `url(${bannerImages[2].img})` }}
        >
          <div className="home__categories1__content">
            <h1 className="home__categories1__title">
              {translator('ACCESSORIES')}
            </h1>
            <p className="home__categories1__text">
              {translator(
                'Sophesticated accessories to make your look and life a paradise.'
              )}
            </p>
            <button
              className="home__categories1__button"
              onClick={(e) => history.push('/category/accessories')}
            >
              {translator('FOOTWEAR')}
            </button>
          </div>
        </div>
        <div
          className="home__categories4"
          style={{ backgroundImage: `url(${bannerImages[3].img})` }}
        >
          <div className="home__categories1__content">
            <h1 className="home__categories1__title">
              {translator('FOOTWEAR')}
            </h1>
            <p className="home__categories1__text">
              {translator('Footwear that makes you comfortable and look good.')}
            </p>
            <button
              className="home__categories1__button"
              onClick={(e) => history.push('/category/footwear')}
            >
              {translator('SHOP NOW')}
            </button>
          </div>
        </div>
      </div>

      <ProductRow
        title="Featured Products"
        items={FAKEDATA['FEATURED_PRODUCTS']}
      />
    </div>
  );
};

export default Home;
