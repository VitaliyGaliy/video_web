import * as React from "react";
import moment = require("moment");
import "./index.scss";
import TimeItem from "./TimeItem";
import NumberItem from "./NumberItem";
import { CameraInput } from "../../../utils/interfaces";
import { useSelector, useDispatch } from "react-redux";
import Thumbnails from "../Thumbnails/Thumbnails";
import { useEffect, useState } from "react";
import DayItem from "./DayItem";
import { getListOfThumbnailsDays } from "../../../Redux/thumbnails/actions";

interface Props {
  target?: string;
  children?: object;
  years: object[];
  year: string;
}

// interface RootState {
//   thumbnails: {
//     years: object[];
//   };
// }

const MonthItem = ({ target, children, years, year }: Props) => {
  const [isItemVisible, setIsItemVisible] = useState({});
  //   const { years } = useSelector((state: RootState) => state.thumbnails);
  const dispatch = useDispatch();

  const getDays = (index, event, year, month) => {
    event.stopPropagation();
    setIsItemVisible((prevState) => ({
      ...prevState,
      [index]: !Boolean(prevState[index]),
    }));
    dispatch(getListOfThumbnailsDays(target, year, month));
  };
  moment;
  return (
    <>
      {Object.keys(years[year]).map((month, index) => {
        return (
          <>
            <div
              onClick={(event) => getDays(index, event, year, month)}
              className="rootTree_TimeCellContainer"
            >
              <div className="rootTree_treeContainer">
                <div className="rootTree_upperJoinLine" />
                <div
                  className={`rootTree_bottomJoinLine ${
                    Object.keys(years[year]).length - 1 > index &&
                    "rootTree_active"
                  } `}
                />
              </div>
              <div style={{ width: "179px" }} className="rootTree_TimeCell">
                <span>
                  {moment(`${year}/${month}`, "YYYY/MM").format("MMM  YYYY")}
                </span>
              </div>
            </div>
            {isItemVisible[index] && (
              <DayItem
                years={years}
                year={year}
                month={month}
                target={target}
              />
            )}
          </>
        );
      })}
    </>
  );
};

export default MonthItem;
