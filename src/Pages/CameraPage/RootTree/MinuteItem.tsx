import * as React from "react";
import moment = require("moment");

import "./index.scss";
import TimeItem from "./TimeItem";
import NumberItem from "./NumberItem";
import { CameraInput } from "../../../utils/interfaces";
import { useSelector, useDispatch } from "react-redux";
import Thumbnails from "../Thumbnails/Thumbnails";
import { useEffect, useState } from "react";
import {
  getListOfThumbnailsMonth,
  getListOfThumbnailsDays,
  getListOfThumbnailsHours,
  getListOfThumbnailsMinutes,
  getListOfThumbnailsImages,
} from "../../../Redux/thumbnails/actions";
// import MonthItem from "./MonthItem";
// import MinuteItem from "./MinuteItem";

interface Props {
  target: string;
  years: object[];
  year: string;
  month: string;
  day: string;
  hour: string;
}

// interface RootState {
//   thumbnails: {
//     years: object[];
//     year: string;
//     month: string;
//   };
// }

const MinuteItem = ({ target, years, year, month, day, hour }: Props) => {
  //   const [isItemVisible, setIsItemVisible] = useState(false);
  //   const { years } = useSelector((state: RootState) => state.thumbnails);
  const dispatch = useDispatch();

  const getImages = (event, year, month, day, hours, minutes) => {
    event.stopPropagation();
    dispatch(
      getListOfThumbnailsImages(target, year, month, day, hours, minutes)
    );
  };

  return (
    <>
      {Object.keys(years[year][month][day][hour]).map((minute, index) => {
        return (
          <div
            onClick={(event) =>
              getImages(event, year, month, day, hour, minute)
            }
            className="rootTree_TimeCellContainer"
          >
            <div className="rootTree_treeContainer">
              <div className="rootTree_upperJoinLine" />
              <div
                className={`rootTree_bottomJoinLine ${
                  Object.keys(years[year][month][day]).length - 1 > index &&
                  "rootTree_active"
                } `}
              />
            </div>
            <div style={{ width: "146px" }} className="rootTree_TimeCell">
              <span>
                {moment(
                  `${year}/${month}/${day}/${hour}/${minute}`,
                  "YYYY/MM/DD/H/m"
                ).format("H[:]m DD MMM YYYY")}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MinuteItem;
