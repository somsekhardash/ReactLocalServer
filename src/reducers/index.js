import { combineReducers } from "redux";
import headerReducer from "./headerReducer";
import portReducer from "./portReducer"

export default combineReducers({
  "headerData":headerReducer,
  "portReducer":portReducer
})
