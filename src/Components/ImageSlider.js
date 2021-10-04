import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";

import { BaseUrl } from "../Config/Services";

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
        console.log(response.data);
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
                  style={{ maxHeight: "80vh" }}
                  className="d-block w-100"
                  src={item.path}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h2>{item.title}</h2>
                  <br />
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        : null}
    </Carousel>
  );
};

export default ImageSlider;
