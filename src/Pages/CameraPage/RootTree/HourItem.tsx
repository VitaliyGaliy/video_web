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
  getListOfThumbnailsMinutes,
  getListOfThumbnailsImages,
} from "../../../Redux/thumbnails/actions";
import MinuteItem from "./MinuteItem";

interface Props {
  target: string;
  years: object[];
  year: string;
  month: string;
  day: string;
}

// interface RootState {
//   thumbnails: {
//     years: object[];
//     year: string;
//     month: string;
//   };
// }

const HourItem = ({ target, years, year, month, day }: Props) => {
  const [isItemVisible, setIsItemVisible] = useState({});
  const dispatch = useDispatch();

  const getMinutes = (index, event, year, month, day, hours) => {
    event.stopPropagation();
    setIsItemVisible((prevState) => ({
      ...prevState,
      [index]: !Boolean(prevState[index]),
    }));
    dispatch(getListOfThumbnailsMinutes(target, year, month, day, hours));
  };

  return (
    <>
      {Object.keys(years[year][month][day]).map((hour, index) => {
        return (
          <>
            <div
              onClick={(event) =>
                getMinutes(index, event, year, month, day, hour)
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
              <div style={{ width: "157px" }} className="rootTree_TimeCell">
                <span>
                  {moment(
                    `${year}/${month}/${day}/${hour}`,
                    "YYYY/MM/DD/H"
                  ).format("H[:00] DD MMM YYYY")}
                </span>
              </div>
            </div>
            {isItemVisible[index] && (
              <MinuteItem
                target={target}
                years={years}
                year={year}
                month={month}
                day={day}
                hour={hour}
              />
            )}
          </>
        );
      })}
    </>
  );
};

export default HourItem;
