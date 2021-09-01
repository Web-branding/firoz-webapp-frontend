import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from 'axios';

const ImageSlider = () => {
  const [sliderData, setSLiderData] = useState([]);
  const [sliderDatas, setSLiderDatas] = useState([]);

  useEffect(() => {
    
      axios.get('https://firoz.thewebbranding.com/api/slides').then((response)=>{
          console.log(response.data.slides[0])
          setSLiderDatas(response.data.slides[0])
          })
    setSLiderData([
      {
        caption: "",
        description: "",
        img: require("../img/promo_1.jpg").default,
        
      },
      {
        caption: "",
        description: "",
        // img:"{sliderDatas.image[0]}",
        // img:require(" {`../img/${sliderDatas.image}.jpg`}").default,
        img: require("../img/promo_1.jpg").default,
      },
      {
        caption: "",
        description: "",
        img: require("../img/promo_1.jpg").default,
      },
    ]);
  }, []);

  return (
    <Carousel>
      {sliderData.length
        ? sliderData.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item.img}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{sliderDatas.title}</h3>
                  <p>
                  {sliderDatas.description}
                    {/* Nulla vitae elit libero, a pharetra augue mollis interdum. */}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        : null}
    </Carousel>
  );
};

export default ImageSlider;
