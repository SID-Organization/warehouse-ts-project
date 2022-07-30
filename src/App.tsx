import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./index.css";

import Header from "./components/header/Header";
import TeacherHome from "./pages/teacher/home";

import AttendantHome from './pages/attendant/home';
import AttendantReserves from './pages/attendant/reserves';
import AttendantSideBar from './pages/attendant/side-bar';

import Login from "./pages/login";
import Register from "./pages/register";

export default function App() {
  return (
    <>
      <div className="screen-content">
        <Router>
          <Routes>
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />

            <Route path='/atendente' >
              <Route path='' element={<Header />}>
                <Route path='' element={<AttendantSideBar />} >
                  <Route path='home' element={<AttendantHome />} />
                  <Route path='reservas' element={<AttendantReserves />} />
                </Route>
              </Route>
            </Route>

            <Route path='/professor'>
              <Route path='' element={<Header />}>
                <Route path='' element={<AttendantSideBar />} >
                  <Route path='produtos' element={<TeacherHome />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}
