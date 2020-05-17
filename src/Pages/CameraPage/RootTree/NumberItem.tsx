import * as React from "react";

interface Props {}

const NumberItem = (props: Props) => {
  return (
    <div className="rootTree_NumberCellContainer">
      <div className="rootTree_treeContainer">
        <div className="rootTree_upperJoinLine" />
        <div className="rootTree_bottomJoinLine rootTree_active" />
      </div>
      <div className="rootTree_TimeCell">
        <span>50</span>
      </div>
    </div>
  );
};

export default NumberItem;
