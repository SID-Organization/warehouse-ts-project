import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Header from "./components/header/Header";
import TeacherHome from "./pages/teacher/home";

import AttendantHome from "./pages/attendant/home";

import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
