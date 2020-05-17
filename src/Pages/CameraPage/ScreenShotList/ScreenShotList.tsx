import * as React from "react";
import moment = require("moment");

import "./index.scss";
import { useSelector } from "react-redux";

interface Props {
  screenshots: String[];
}

interface RootState {
  thumbnails: {
    images: string[];
  };
}

const ScreenShotList = ({ screenshots }: Props) => {
  const { images } = useSelector((state: RootState) => state.thumbnails);
  return (
    <div className="screenShotList_container">
      {images.map((i, index) => {
        const [test, year, month, day, hour, minute, image] = i.split("/");
        console.log(
          "year, month, day, hour, minute",
          year,
          month,
          day,
          hour,
          minute
        );

        return (
          <div key={index} className="screenShot_container">
            <div className="screenShot_wrapper">
              <img
                className="videoIcon"
                src={`https://seer-rtsp.codeda.com/storage/${i}`}
                //https://seer-rtsp.codeda.com/storage/test/2020/5/11/8/23/41.jpg
                alt="video"
              />
            </div>
            <span className="screenShot_date">
              {moment(
                `${year}/${month}/${day}/${hour}/${minute}`,
                "YYYY/MM/DD/H/m"
              ).format("H[:]m DD MMM YYYY")}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ScreenShotList;
