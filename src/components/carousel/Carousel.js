import React, { useState } from 'react';
import { images } from '../carousel/CarouselData';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Carousel.scss';
import translate from '../../utils/i18n/translate';

const Carousel = () => {
  const [currImg, setCurrImg] = useState(2);
  const translator = (item) =>
    translate(item) === item ? item : translate(item);

  const handlePrevClick = (e) => {
    if (currImg === 0) {
      setCurrImg(2);
    } else if (currImg >= 0) {
      setCurrImg(currImg - 1);
    }
  };
  const handleNextClick = (e) => {
    if (currImg === images.length - 1) {
      setCurrImg(0);
    } else {
      setCurrImg(currImg + 1);
    }
  };
  return (
    <div className="carousel">
      <div
        className="carousel__inner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div className="carousel__inner__left" onClick={handlePrevClick}>
          <ArrowBackIcon />
        </div>
        <div className="carousel__inner__center">
          <div className="carousel__content">
            <p className="carousel__subtitle">
              {translator(images[currImg].subtitle.toUpperCase())}
            </p>
            <h1 className="carousel__title">
              {translator(images[currImg].title)}
            </h1>
            <button className="carousel__button">
              {translator(images[currImg].buttonContent)}
            </button>
          </div>
        </div>
        <div className="carousel__inner__right" onClick={handleNextClick}>
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
