import { combineReducers } from "redux";
import repositories from "./repositories";
import commits from "./commits";

export default combineReducers({ repositories, commits });
