import React, { useContext, useEffect, useState } from "react";
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
import SideBar from './components/side-bar';

import Login from "./pages/login";
import Register from "./pages/register";

import calendar from './assets/calendar.png';
import clock from './assets/clock.png';
import home from './assets/home.png';
import product from './assets/product.png';


export default function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [attendantUser, setAttendantUser] = useState(localStorage.getItem("attendantUser"));
  const [teacherUser, setTeacherUser] = useState(localStorage.getItem("teacherUser"));
  const [adminUser, setAdminUser] = useState(localStorage.getItem("adminUser"));


  return (
    <>
      <div className="screen-container">
        <Router>
          {user &&
            <>
              <Header />
              <SideBar links={
                adminUser ? [
                  { to: "/admin/home", img: home, text: "Home" },
                ] :

                  attendantUser ? [
                    { to: '/atendente/home', img: home, text: 'Home' },
                    { to: '/atendente/reservas', img: calendar, text: 'Reservas' }
                  ] :

                    [
                      { to: '/professor/home', img: home, text: 'Home' },
                      { to: '/professor/produtos', img: product, text: 'Produtos' },
                    ]
              } />
            </>
          }


          <div className="screen-content" style={user ? { marginLeft: '10rem', padding: '5.5rem 3rem 3rem 3rem' } : undefined}>
            <Routes>

              <Route path="*" element={
                <Navigate to={
                  !user ? "/login" :
                    adminUser ? "/admin/home" :
                      attendantUser ? "/atendente/home" :
                        "professor/home"
                } />
              } />

              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />

              <Route path='/atendente/home' element={<AttendantHome />} />
              <Route path='/atendente/reservas' element={<AttendantReserves />} />

              <Route path='/professor/produtos' element={<TeacherHome />} />

            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}
