import * as React from "react";
import DateItem from "../RootTree/DateItem";
import axios from "axios";

import "./index.scss";
import ScreenShotList from "../ScreenShotList/ScreenShotList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CameraInput } from "../../../utils/interfaces";
import { getListOfThumbnailsYear } from "../../../Redux/thumbnails/actions";

interface Props {}

interface RootState {
  cameras: {
    cameraList: any;
    currentCameraIndex: number;
    currentCamera: CameraInput;
    rebroadcastParams: object;
  };
}

const Thumbnails = (props: Props) => {
  const [screenshots, setScreenshots] = React.useState([]);
  const dispatch = useDispatch();

  const { currentCamera } = useSelector((state: RootState) => state.cameras);

  useEffect(() => {
    dispatch(getListOfThumbnailsYear(currentCamera.target));
    console.log("Thumbnails useEffect");
    axios
      .get(`https://seer-rtsp.codeda.com/storage/test/2020/5/11/8/23/`)
      .then(({ data }) => {
        setScreenshots(data);
        // console.log("data", data);
      });
  }, []);
  return (
    <div className="thumbnails_container">
      <h1 className="thumbnails_title">Thumbnails</h1>
      <div className="thumbnails_content">
        <DateItem target={currentCamera.target} />
        <ScreenShotList screenshots={screenshots} />
      </div>
    </div>
  );
};

export default Thumbnails;
