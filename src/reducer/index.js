import { combineReducers } from "redux";

import authReducer from "./Auth";
import postReducer from "./Post";

export const reducers = combineReducers({authReducer, postReducer})
