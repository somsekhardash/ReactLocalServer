import {createStore, applyMiddleware} from "redux";

import { createLogger } from 'redux-logger'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import Reducer from "./reducers/index";

let store = createStore(Reducer,applyMiddleware(thunk,createLogger(),promise()));
                    
export default store;