"use client";

import { Provider } from "react-redux";

import { store } from "./store";

export const ReduxProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
