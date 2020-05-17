import * as types from "./constants";

export const getListOfCameras = (text) => ({
  type: types.GET_LIST_OF_CAMERAS,
  text,
});
