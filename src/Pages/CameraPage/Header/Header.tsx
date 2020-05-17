import * as React from "react";
import { useEffect, useRef } from "react";
import mainCam from "../../../assets/images/mainCam.png";
import "./index.scss";
import ToggleButton from "../../../components/ToggleButton/ToggleButton";
import { useDispatch, useSelector } from "react-redux";
import { CameraInput } from "../../../utils/interfaces";
import VideoPlayer from "../../../components/VideoPlayer/VideoPlayer";

interface Props {
  // cameras: CameraInput;
}

interface RootState {
  cameras: {
    cameraList: [];
    currentCameraIndex: number;
    currentCamera: CameraInput;
  };
}

const Header = (props: Props) => {
  const videoEl = useRef(null);
  const { cameraList, currentCameraIndex, currentCamera } = useSelector(
    (state: RootState) => state.cameras
  );

  // const currentCamera: CameraInput = cameraList[currentCameraIndex];

  return (
    <div className="headerContainer">
      <VideoPlayer />
      {/* <video className="header_mainCamIcon" src={currentCamera?.source} /> */}
      <div className="header_controllsContainer">
        <span className="header_mainTitle">{currentCamera?.name}</span>
        <span className="header_cameraTargetTitle">{`Target: ${currentCamera?.target}`}</span>
        <span className="header_cameraStatusTitle">Online</span>

        <div className="header_controllItem">
          <span className="header_controllItemTitle">Rebroadcast</span>
          <ToggleButton isToggled={currentCamera.rebroadcast} />
        </div>
        <div className="header_controllItem">
          <span className="header_controllItemTitle">Thumbnails</span>
          <ToggleButton isToggled={currentCamera.thumbnails} />
        </div>
        <div className="header_controllItem">
          <span className="header_controllItemTitle">Recording</span>
          <ToggleButton isToggled={currentCamera.recording} />
        </div>
      </div>
    </div>
  );
};

export default Header;
