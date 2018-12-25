import { combineReducers } from "redux";
import postsRecucer from "./postsReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  posts: postsRecucer,
  users: usersReducer
});

export default reducers;
