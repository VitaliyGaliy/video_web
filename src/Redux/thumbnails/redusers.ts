import * as types from "./constants";

interface InitialState {
  years: {
    moths: object[];
    images: string[];
  };
}

const initialState = {
  years: {},
  images: [],
};

const arrayIntoObject = (val) => {
  return val.reduce((acc, cur) => {
    acc[cur] = {};
    return acc;
  }, {});
};

export default function thumbnails(state = initialState, action) {
  switch (action.type) {
    case types.GET_LIST_OF_THUMBNAILS_YEAR: {
      const yearsIntoObj = arrayIntoObject(action.payload);
      return {
        ...state,
        years: yearsIntoObj,
      };
    }

    case types.GET_LIST_OF_THUMBNAILS_MONTHS: {
      let curMonths = arrayIntoObject(action.payload.months);
      let curYear = action.payload.year;
      return {
        ...state,
        years: {
          ...state.years,
          [curYear]: curMonths,
        },
      };
    }

    case types.GET_LIST_OF_THUMBNAILS_DAYS: {
      let curDays = arrayIntoObject(action.payload.days);
      let curMonth = action.payload.month;
      let curYear = action.payload.year;
      return {
        ...state,
        years: {
          ...state.years,
          [curYear]: {
            ...state.years[curYear],
            [curMonth]: curDays,
          },
        },
      };
    }

    case types.GET_LIST_OF_THUMBNAILS_HOURS: {
      let curHours = arrayIntoObject(action.payload.hours);
      let curDay = action.payload.day;
      let curMonth = action.payload.month;
      let curYear = action.payload.year;

      return {
        ...state,
        years: {
          ...state.years,
          [curYear]: {
            ...state.years[curYear],
            [curMonth]: {
              ...state.years[curYear][curMonth],
              [curDay]: curHours,
            },
          },
        },
      };
    }

    case types.GET_LIST_OF_THUMBNAILS_MINUTES: {
      let curMinutes = arrayIntoObject(action.payload.minutes);
      let curHour = action.payload.hour;
      let curDay = action.payload.day;
      let curMonth = action.payload.month;
      let curYear = action.payload.year;

      console.log("curMinutes", curMinutes);

      return {
        ...state,
        years: {
          ...state.years,
          [curYear]: {
            ...state.years[curYear],
            [curMonth]: {
              ...state.years[curYear][curMonth],
              [curDay]: {
                ...state.years[curYear][curMonth][curDay],
                [curHour]: curMinutes,
              },
            },
          },
        },
      };
    }

    case types.GET_LIST_OF_THUMBNAILS_IMAGES: {
      return {
        ...state,
        images: action.payload,
      };
    }

    default:
      return state;
  }
}
