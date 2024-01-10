import React, {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import NavBar from "./layout/NavBar";
import Counter from "./components/Counter";
import TotalCount from "./components/TotalCount";

import {Provider} from "react-redux";

import NewCounter from "./reduxx/counter/NewCounter";
import store from "./reduxx/store";
import AnotherCounter from "./reduxx/anotherCounter/AnotherCounter";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import VariableCount from "./reduxx/variableCount/VariableCount";
import Assignment from "./reduxx/assignment2/Assignment";

export default function App() {
  return (
    <Provider store={store}>
      {/* <NewCounter />
      <AnotherCounter />


<VariableCount />

<VariableCount daynamic /> */}



<Assignment />

    </Provider>
  );
}






















