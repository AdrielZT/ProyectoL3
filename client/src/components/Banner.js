import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';

const Banner = () => (
  <Carousel autoPlay infiniteLoop showThumbs={false}>
    <div>
      <img src="/images/banner1.jpg" alt="Banner 1" />
    </div>
    <div>
      <img src="/images/banner2.jpg" alt="Banner 2" />
    </div>
    <div>
      <img src="/images/banner3.jpg" alt="Banner 3" />
    </div>
  </Carousel>
);

export default Banner;
