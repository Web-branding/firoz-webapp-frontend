import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const ImageSlider = () => {
  const [sliderData, setSLiderData] = useState([]);

  useEffect(() => {
    setSLiderData([
      {
        caption: "",
        description: "",
        img: require("../img/promo_1.jpg").default,
      },
      {
        caption: "",
        description: "",
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
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
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
