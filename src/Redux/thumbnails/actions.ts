import axios from "axios";
import API from "../../utils/REDUX_EXAMPLE/API";
import * as types from "./constants";

export const getListOfThumbnailsYear = (target) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API}/storage/${target}/`);

    console.log("target", target);
    console.log("data", data);
    const years = data.map((data) => data.split("/")[1]);
    // const arr = ["1999", "2001", "2003", "2004", "2005", "2006", "2007"];
    dispatch({
      type: types.GET_LIST_OF_THUMBNAILS_YEAR,
      payload: years,
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getListOfThumbnailsMonth = (target, year) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${API}/storage/${target}/${year}/`);

    const months = data.map((data) => data.split("/")[2]);
    // console.log("months", months);
    // const arr = ["1", "2", "3", "4", "5", "6", "7"];
    dispatch({
      type: types.GET_LIST_OF_THUMBNAILS_MONTHS,
      payload: { year, months },
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getListOfThumbnailsDays = (target, year, month) => async (
  dispatch
) => {
  try {
    const { data } = await axios.get(
      `${API}/storage/${target}/${year}/${month}/`
    );
    const days = data.map((data) => data.split("/")[3]);
    // const arr = ["1", "2", "3", "4", "5", "6", "7"];

    dispatch({
      type: types.GET_LIST_OF_THUMBNAILS_DAYS,
      payload: { year, month, days },
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getListOfThumbnailsHours = (target, year, month, day) => async (
  dispatch
) => {
  try {
    const { data } = await axios.get(
      `${API}/storage/${target}/${year}/${month}/${day}/`
    );
    const hours = data.map((data) => data.split("/")[4]);

    console.log("hours", hours);

    // const arr = ["1", "2", "3", "4", "5", "6", "7"];

    dispatch({
      type: types.GET_LIST_OF_THUMBNAILS_HOURS,
      payload: { year, month, day, hours },
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getListOfThumbnailsMinutes = (
  target,
  year,
  month,
  day,
  hour
) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${API}/storage/${target}/${year}/${month}/${day}/${hour}/`
    );
    const minutes = data.map((data) => data.split("/")[5]);

    dispatch({
      type: types.GET_LIST_OF_THUMBNAILS_MINUTES,
      payload: { year, month, day, hour, minutes },
    });
  } catch (error) {
    console.log("error", error);
  }
};

export const getListOfThumbnailsImages = (
  target,
  year,
  month,
  day,
  hour,
  minute
) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${API}/storage/${target}/${year}/${month}/${day}/${hour}/${minute}/`
    );
    const minutes = data.map((data) => data.split("/")[5]);

    console.log("data", data);

    // const arr = ["1", "2", "3", "4", "5", "6", "7"];

    dispatch({
      type: types.GET_LIST_OF_THUMBNAILS_IMAGES,
      payload: data,
    });
  } catch (error) {
    console.log("error", error);
  }
};
