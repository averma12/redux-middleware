import { combineReducers } from "redux";
import postsRecucer from "./postsReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  posts: postsRecucer,
  user: usersReducer
});

export default reducers;
