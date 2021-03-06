import React from "react";
import ReactDOM from "react-dom";
import createStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser,
      },
    };
  }
  const store = createStore(preloadedState);
  window.store = store;
  ReactDOM.render(<Root store={store} />, root);
});
