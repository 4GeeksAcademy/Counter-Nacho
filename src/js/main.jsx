import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";

// index.css
import "../styles/index.css";
import CardCount from "./components/Card";
let stop = true;
let regression = false;
let count = 0;
const root = ReactDOM.createRoot(document.querySelector("#root"));

const updateCounter = () => {
  if (stop) {
    if (!regression) {
      count++;
    } else {
      count--;
    }
  }
  render();
};
const reset = () => {
  count = 0;
  render();
};
const render = () => {
  if (stop) {
    root.render(
      <CardCount
        count={count}
        reset={reset}
        stop={stopCount}
        regression={regressionCount}
      />
    );
  }
};
const stopCount = () => {
  if (!stop) {
    stop = true;
  } else {
    stop = false;
  }
};
const regressionCount = () => {
  if (regression) {
    regression = false;
  } else {
    regression = true;
  }
};

render();
setInterval(updateCounter, 1000);
