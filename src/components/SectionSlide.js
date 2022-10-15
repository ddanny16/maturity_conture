import React from 'react'
import "./SectionSlideStyle.scss"
import ImageSlider from '../layouts/ImageSlider';
import Abb1 from "../assets/ABB11.png";
import Beachumbrella from "../assets/img/BaechUmbrelaa1.png"
import Barmat from "../assets/img/BarMat1.png"
import Berret from "../assets/img/Berret1.png"
import Btns from "../assets/img/Btns1.png"

const SectionSlide = () => {

  const slides = [
    { url: Abb1, title: "umb" },
    { url: Beachumbrella, title: "beach" },
    { url: Barmat, title: "each" },
    { url: Berret, title: "each" },
    { url: Btns, title: "each" },

  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};


export default SectionSlide
