import * as React from "react";
import { Link } from "react-router-dom";

import "./index.scss";
import videoMaock1 from "../../assets/images/videoMaock1.png";
import deleteIcon from "../../assets/images/deleteIcon.png";
import editIcon from "../../assets/images/editIcon.png";
import { CameraInput } from "../../utils/interfaces";

interface Props {
  onSelectItem: (index) => void;
  oDeleteItem: (index) => void;
  index: number;
  active: boolean;
  cameraInput: CameraInput;
  cameraId: string;
}

const CameraItem = ({
  onSelectItem,
  index,
  active,
  cameraInput,
  cameraId,
  oDeleteItem,
}: Props) => {
  return (
    <Link to={`/cam/${cameraId}`} className="cameraItem_link">
      <div
        onClick={() => onSelectItem(index)}
        className={`cameraItem_container ${
          active && "cameraItem_sidebar-active"
        }`}
      >
        <img className="cameraItem_videoIcon" src={videoMaock1} alt="video" />
        <div className="cameraItem_content">
          <div className="cameraItem_wrapper">
            <span className="cameraItem_title">{cameraInput.name}</span>
            <span className="cameraItem_targetTitle">{`Target: ${cameraInput.target}`}</span>
            <span className="cameraItem_statusTitle">Online</span>
          </div>
        </div>

        <div className="cameraItem_deleteIditContainer">
          <Link style={{ alignSelf: "flex-end" }} to={`/edit-cam/${cameraId}`}>
            <img
              // onClick={() => onSelectItem(index)}
              className="deleteEditIcon"
              src={editIcon}
              alt="video"
            />
          </Link>

          <img
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              oDeleteItem(cameraInput._id);
            }}
            className="deleteEditIcon"
            src={deleteIcon}
            alt="video"
          />
        </div>
      </div>
    </Link>
  );
};

export default CameraItem;
