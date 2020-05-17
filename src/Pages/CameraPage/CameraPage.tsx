import * as React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header/Header";
import "./index.scss";
import Thumbnails from "./Thumbnails/Thumbnails";
import RecordedClips from "./RecordedClips/RecordedClips";
import Modal from "../../components/Modal/Modal";
import Slider from "./Slider/Slider";
import { useEffect } from "react";
import { getCamera, getRebroadcastParams } from "../../Redux/camera/actions";
import { useDispatch, useSelector } from "react-redux";

interface Props {}

interface RootState {
  cameras: {
    cameraList: any;
    currentCameraIndex: number;
    currentCamera: object;
    rebroadcastParams: object;
  };
}

const CameraPage = (props: Props) => {
  const { camId } = useParams<{ camId: string }>();
  const dispatch = useDispatch();

  const { currentCamera, rebroadcastParams } = useSelector(
    (state: RootState) => state.cameras
  );

  useEffect(() => {
    dispatch(getCamera(camId));
    dispatch(getRebroadcastParams(camId));
  }, [camId]);

  return (
    <>
      {currentCamera && rebroadcastParams && (
        <div className="CameraPageContainer">
          <Header />
          <Thumbnails />
          <RecordedClips />
          <Slider />
        </div>
      )}
    </>
  );
};

export default CameraPage;
