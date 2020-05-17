import * as types from "./constants";
import { CameraInput } from "../../utils/interfaces";

import axios from "axios";
import API from "../../utils/REDUX_EXAMPLE/API";

export const getListOfCameras = () => async (dispatch) => {
  try {
    const { data: cameras } = await axios.get(`${API}/camera`);
    dispatch({
      type: types.GET_LIST_OF_CAMERAS,
      payload: { ...cameras },
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getCamera = (camId: string) => async (dispatch) => {
  try {
    const {
      data: { camera },
    } = await axios.get(`${API}/camera/${camId}`);
    dispatch({
      type: types.GET_CAMERA,
      payload: camera,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getRebroadcastParams = (camId: string) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${API}/camera/rebroadcast-params/${camId}`
    );
    dispatch({
      type: types.GET_REBROADCAST_PARAMS,
      payload: data,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const addCamera = (cameraData: CameraInput, history) => async (
  dispatch
) => {
  try {
    const {
      data: { _id },
    } = await axios.put(`${API}/camera`, { camera: { ...cameraData } });

    dispatch({
      type: types.ADD_CAMERA,
      payload: { _id, ...cameraData },
    });
    history.push(`/cam/${_id}`);
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteCamera = (camId: string, history) => async (dispatch) => {
  try {
    await axios.delete(`${API}/camera`, { data: { _id: camId } });

    dispatch({
      type: types.DELETE_CAMERA,
      payload: camId,
    });

    history.push("/");
  } catch (error) {
    console.log("error", error);
  }
};

export const updateCamera = (_id: string, cameraData, history) => async (
  dispatch
) => {
  try {
    await axios.post(`${API}/camera`, {
      camera: { ...cameraData },
      _id,
    });

    dispatch({
      type: types.UPDATE_CAMERA,
      payload: { _id, ...cameraData },
    });

    history.push(`/cam/${_id}`);
  } catch (error) {
    console.log("error", error);
  }
};
