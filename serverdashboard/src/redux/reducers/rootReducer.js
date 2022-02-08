import { combineReducers } from "redux";
import serverReducer from "./serverReducer";

const rootReducer = combineReducers({
  servers: serverReducer,
});

export default rootReducer;
