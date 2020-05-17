import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import cameras from "./camera/reduser";
import thumbnails from "./thumbnails/redusers";

const rootReducer = combineReducers({
  cameras,
  thumbnails,
  form: reduxFormReducer,
});

export default rootReducer;
