import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import PostList from "./components/PostList";
import thunk from "redux-thunk";

import "./styles.css";

function App() {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  rootElement
);
