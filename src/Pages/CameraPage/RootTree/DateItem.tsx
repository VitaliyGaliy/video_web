import * as React from "react";
import "./index.scss";
import TimeItem from "./TimeItem";
import NumberItem from "./NumberItem";
import { CameraInput } from "../../../utils/interfaces";
import { useSelector, useDispatch } from "react-redux";
import Thumbnails from "../Thumbnails/Thumbnails";
import { useEffect, useState } from "react";
import { getListOfThumbnailsMonth } from "../../../Redux/thumbnails/actions";
import MonthItem from "./MonthItem";

interface Props {
  target: string;
}

interface RootState {
  thumbnails: {
    years: object[];
  };
}

const DateItem = ({ target }: Props) => {
  const [isItemVisible, setIsItemVisible] = useState({});
  const { years } = useSelector((state: RootState) => state.thumbnails);
  const dispatch = useDispatch();

  const getMonths = (index, year) => {
    console.log("year", year);
    setIsItemVisible((prevState) => ({
      ...prevState,
      [index]: !Boolean(prevState[index]),
    }));
    dispatch(getListOfThumbnailsMonth(target, year));
  };

  return (
    <>
      {Object.keys(years).map((year, index) => {
        return (
          <div
            onClick={() => getMonths(index, year)}
            className="rootTree_container"
          >
            <div className="rootTree_DayCell">
              <span>{year}</span>
            </div>
            {isItemVisible[index] && (
              <MonthItem years={years} year={year} target={target} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default DateItem;
