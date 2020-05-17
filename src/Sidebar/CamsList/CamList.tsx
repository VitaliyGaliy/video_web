import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router";

import "./index.scss";
import CameraItem from "./CamItem";
import {
  getListOfCameras,
  deleteCamera,
  // setCurrentCamera,
} from "../../Redux/camera/actions";
import { CameraInput } from "../../utils/interfaces";
// import { ConferenceApi } from "../../../mediasoup/front/src/conference-api";

interface Props {
  // camId: string;
}

type allProps = Props & RouteComponentProps;

interface RootState {
  cameras: {
    cameraList: [];
    currentCameraIndex: number;
  };
}

const CamsList = (props: allProps) => {
  const [itemsIndex, setCActiveItem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListOfCameras());
  }, []);

  const onSelectItem = (itemsIndex) => {
    setCActiveItem(itemsIndex);
  };

  const oDeleteItem = (camId) => {
    dispatch(deleteCamera(camId, props.history));
  };

  const { cameraList, currentCameraIndex } = useSelector(
    (state: RootState) => state.cameras
  );

  let params = useRouteMatch<{ camId: string }>("/cam/:camId");
  const urlCamId = params?.params?.camId;
  console.log("cameraList", cameraList);

  return (
    <>
      {cameraList.map((cameraInput: CameraInput, index) => {
        return (
          <CameraItem
            key={cameraInput._id}
            cameraId={cameraInput._id}
            cameraInput={cameraInput}
            onSelectItem={onSelectItem}
            oDeleteItem={oDeleteItem}
            index={index}
            active={urlCamId === cameraInput._id}
          />
        );
      })}
    </>
  );
};

export default withRouter(CamsList);
