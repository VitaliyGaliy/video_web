import * as types from "./constants";
import { CameraInput } from "../../utils/interfaces";

export interface InitialStateInterface {
  cameraList: CameraInput[];
  currentCamera: boolean;
  rebroadcastParams: boolean;
}

const initialState: InitialStateInterface = {
  cameraList: [],
  currentCamera: null,
  rebroadcastParams: null,
};

export default function cameras(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST_OF_CAMERAS:
      const { cameras } = action.payload;
      return { ...state, cameraList: cameras };

    case types.GET_CAMERA:
      return { ...state, currentCamera: action.payload };

    case types.GET_REBROADCAST_PARAMS:
      return { ...state, rebroadcastParams: action.payload };

    case types.ADD_CAMERA:
      const newAddedCameraList = [...state.cameraList, action.payload];
      return { ...state, cameraList: newAddedCameraList };

    case types.DELETE_CAMERA:
      const newDeletedCameraList = state.cameraList.filter((camera) => {
        return camera._id !== action.payload;
      });

      return { ...state, cameraList: newDeletedCameraList };

    case types.UPDATE_CAMERA:
      const newUpdatedCameraList = state.cameraList.map((camera) => {
        if (camera._id === action.payload._id) {
          return action.payload;
        }
        return camera;
      });
      return { ...state, cameraList: newUpdatedCameraList };

    default:
      return state;
  }
}
