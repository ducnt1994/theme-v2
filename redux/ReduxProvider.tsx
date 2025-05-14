"use client";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "./store";

const store = createStore();

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}