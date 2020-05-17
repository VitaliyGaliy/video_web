import * as React from "react";

interface Props {}

const TimeItem = (props: Props) => {
  return (
    <div className="rootTree_TimeCellContainer">
      <div className="rootTree_treeContainer">
        <div className="rootTree_upperJoinLine" />
        <div className="rootTree_bottomJoinLine active" />
      </div>
      <div className="rootTree_TimeCell">
        <span>11:00</span>
      </div>
    </div>
  );
};

export default TimeItem;
