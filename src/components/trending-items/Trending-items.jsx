import { useEffect } from "react";

import SingleTrendingItem from "../single-trending-item/Single-trending-item";
import './Trending-items-list.scss';

import Swiper from 'swiper';
import 'swiper/css';

function TrendingItems() {
  useEffect(() => {
    const swiper = new Swiper('.trending-items-list', {
      slidesPerView: 2.5,
      spaceBetween: 10,
      grabCursor: true,
      allowTouchMove: true,
      autoplay: {
        delay: 5000
      }
    })

    return () => {
      swiper.destroy();
    };
  }, [])
  
  return (
    <div className="trending-items-list">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <SingleTrendingItem />
        </div>
        <div className="swiper-slide">
          <SingleTrendingItem />
        </div>
        <div className="swiper-slide">
          <SingleTrendingItem />
        </div>
        <div className="swiper-slide">
          <SingleTrendingItem />
        </div>
        <div className="swiper-slide">
          <SingleTrendingItem />
        </div>
      </div>
    </div>
  )
}

export default TrendingItems;

