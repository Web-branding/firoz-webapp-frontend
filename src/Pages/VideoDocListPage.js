import React from "react";
import { BaseUrl } from "../Config/Services";
import axios from "axios";
import ReactPlayer from "react-player";

// import {  } from "../img/";
const VideoDocListPage = () => {
  React.useEffect(() => {
    getVideoDocList();
  }, []);

  const [videoDocList, setVideoDocList] = React.useState([]);

  const getVideoDocList = () => {
    axios
      .get(BaseUrl + "/api/videos")
      .then((response) => {
        setVideoDocList(response.data.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(" Error in VD List APi ", err);
        setVideoDocList([]);
      });
  };

  return (
    <div className="coatainer" style={{ marginTop: "10em" }}>
      <div className="container mt-5 d-flex flex-wrap">
        {videoDocList.length
          ? videoDocList.map((item) => (
              <div class="card shadow donation-list-container ">
                {/* <img src={} class="card-img-top" alt="" /> */}
                <div class="card-body">
                  <h5 class="card-title pb-2 mb-4 border-bottom fw-bold">
                    {item.title}
                  </h5>
                  <div className="react-player">
                    <ReactPlayer
                      url={item.video_path}
                      height="100%"
                      width="100%"
                      controls
                      style={{ borderRadius: "15px" }}
                    />
                  </div>
                  <p class="card-text mt-5 mb-3">{item.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  {item.file_path !== ""
                    ? item.file_path.split(",").map((item2) => {
                        return (
                          <a
                            href={item2}
                            target="_blank"
                            class="list-group-item fs-sm"
                          >
                            {item2.split("/").pop()}
                          </a>
                        );
                      })
                    : "No DOcuments Found"}
                </ul>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default VideoDocListPage;
