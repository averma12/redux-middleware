import { combineReducers } from "redux";
import postsRecucer from "./postsReducer";

const reducers = combineReducers({
  posts: postsRecucer
});

export default reducers;
