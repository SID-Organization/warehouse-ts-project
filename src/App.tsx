import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./index.css";

import Profile from "./pages/profile";

import Header from "./components/header/Header";
import TeacherProducts from "./pages/teacher/products";
import TeacherHome from "./pages/teacher/home";
import TeacherNewReserve from "./pages/teacher/new-reserve";
import ReserveHistoric from "./pages/teacher/reserve-historic";

import AttendantHome from "./pages/attendant/home";
import AttendantReserves from "./pages/attendant/reserves";
import SideBar from "./components/side-bar";

import Login from "./pages/login";
import Register from "./pages/register";

import calendar from "./assets/calendar.png";
import clock from "./assets/clock.png";
import home from "./assets/home.png";
import product from "./assets/product.png";
import plus from "./assets/plus.png";
import produtosIcon from "./assets/produtosIcon.png";
import historic from "./assets/historic.png";

export default function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [attendantUser, setAttendantUser] = useState(
    localStorage.getItem("attendantUser")
  );
  const [teacherUser, setTeacherUser] = useState(
    localStorage.getItem("teacherUser")
  );
  const [adminUser, setAdminUser] = useState(localStorage.getItem("adminUser"));

  return (
    <>
      <div className="screen-container">
        <Router>
          {user && (
            <>
              <Header />
              <SideBar
                links={
                  adminUser
                    ? [{ to: "/admin/home", img: home, text: "Home" }]
                    : attendantUser
                    ? [
                        { to: "/atendente/home", img: home, text: "Home" },
                        {
                          to: "/atendente/reservas",
                          img: calendar,
                          text: "Reservas",
                        },
                      ]
                    : [
                        {
                          to: "/professor/home",
                          img: home,
                          text: "Suas reservas",
                        },
                        {
                          to: "/professor/produtos",
                          img: produtosIcon,
                          text: "Produtos",
                        },
                        {
                          to: "/professor/nova-reserva",
                          img: plus,
                          text: "Nova reserva",
                        },
                      ]
                }
              />
            </>
          )}

          <div
            className="screen-content"
            style={
              user
                ? { marginLeft: "10rem", padding: "5.5rem 3rem 3rem 3rem" }
                : undefined
            }
          >
            <Routes>
              <Route
                path="*"
                element={
                  <Navigate
                    to={
                      !user
                        ? "/login"
                        : adminUser
                        ? "/admin/home"
                        : attendantUser
                        ? "/atendente/home"
                        : "professor/home"
                    }
                  />
                }
              />

              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/atendente/home" element={<AttendantHome />} />
              <Route
                path="/atendente/reservas"
                element={<AttendantReserves />}
              />

              <Route path="/professor/produtos" element={<TeacherProducts />} />
              <Route path="/professor/home" element={<TeacherHome />} />
              <Route
                path="/professor/nova-reserva"
                element={<TeacherNewReserve />}
              />

              <Route path="/professor/produtos" element={<TeacherHome />} />
              <Route
                path="/professor/nova-reserva"
                element={<TeacherNewReserve />}
              />
              <Route
                path="/professor/historico-reservas"
                element={<ReserveHistoric />}
              />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}
