import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

import TeacherHome from "./pages/teacher/home";

import Login from "./pages/login";
import Register from "./pages/register";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher">
          <Route path="/home" element={<TeacherHome />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
