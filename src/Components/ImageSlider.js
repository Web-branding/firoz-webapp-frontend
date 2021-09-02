import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";

const BaseUrl = "https://firoz.thewebbranding.com";

const ImageSlider = () => {
  const [sliderDatas, setSliderDatas] = useState([]);

  useEffect(() => {
    getSliderApi();
  }, []);

  const getSliderApi = () => {
    axios
      .get(BaseUrl + "/api/slides")
      .then((response) => {
        setSliderDatas(response.data.data);
      })
      .catch((err) => {
        console.error(" Error in SLider APi ", err);
        setSliderDatas([]);
      });
  };

  return (
    <Carousel>
      {sliderDatas.length
        ? sliderDatas.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item.path}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{sliderDatas.title}</h3>
                  <p>{sliderDatas.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        : null}
    </Carousel>
  );
};

export default ImageSlider;
