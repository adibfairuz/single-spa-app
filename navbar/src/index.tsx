import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import singleSpaReact from "single-spa-react";
import Root from "./App";
import './index.css'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => <BrowserRouter><Root /></BrowserRouter>,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
