import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { browserHistory, Router, Route } from 'react-router-dom';

import App from "./components/App";
import reducers from "./reducers";

// const history = useHistory();

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.querySelector("#root")
);
