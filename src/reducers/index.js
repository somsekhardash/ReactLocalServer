import { combineReducers } from "redux";
import headerReducer from "./headerReducer";
import portReducer from "./portReducer";
import serviceReducer from "./serviceReducer";

export default combineReducers({
  headerReducer,
  portReducer,
  serviceReducer
})
