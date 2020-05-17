import * as React from "react";
import moment = require("moment");

import "./index.scss";
import TimeItem from "./TimeItem";
import NumberItem from "./NumberItem";
import { CameraInput } from "../../../utils/interfaces";
import { useSelector, useDispatch } from "react-redux";
import Thumbnails from "../Thumbnails/Thumbnails";
import { useEffect, useState } from "react";
import { getListOfThumbnailsHours } from "../../../Redux/thumbnails/actions";
import HourItem from "./HourItem";

interface Props {
  target: string;
  years: object[];
  year: string;
  month: string;
}

const DayItem = ({ target, years, year, month }: Props) => {
  const [isItemVisible, setIsItemVisible] = useState({});
  //   const { years } = useSelector((state: RootState) => state.thumbnails);
  const dispatch = useDispatch();

  const getHours = (index, event, year, month, day) => {
    event.stopPropagation();
    console.log("event", event.target);

    setIsItemVisible((prevState) => ({
      ...prevState,
      [index]: !Boolean(prevState[index]),
    }));

    dispatch(getListOfThumbnailsHours(target, year, month, day));
  };
  console.log("isItemVisible[index]", isItemVisible);

  return (
    <>
      {Object.keys(years[year][month]).map((day, index) => {
        return (
          <>
            <div
              onClick={(event) => getHours(index, event, year, month, day)}
              className="rootTree_TimeCellContainer"
            >
              <div className="rootTree_treeContainer">
                <div className="rootTree_upperJoinLine" />
                <div
                  className={`rootTree_bottomJoinLine ${
                    Object.keys(years[year][month]).length - 1 > index &&
                    "rootTree_active"
                  } `}
                />
              </div>
              <div style={{ width: "167px" }} className="rootTree_TimeCell">
                <span>
                  {moment(`${year}/${month}/${day}`, "YYYY/MM/DD").format(
                    "DD MMM YYYY"
                  )}
                </span>
              </div>
            </div>
            {isItemVisible[index] && (
              <HourItem
                target={target}
                years={years}
                year={year}
                month={month}
                day={day}
              />
            )}
          </>
        );
      })}
    </>
  );
};

export default DayItem;
