import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
