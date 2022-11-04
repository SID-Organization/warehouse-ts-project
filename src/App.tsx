import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Profile from "./pages/profile";

import Header from "./components/Header";
import TeacherProducts from "./pages/teacher/products";
import TeacherHome from "./pages/teacher/reserves";
import TeacherNewReserve from "./pages/teacher/new-reserve";
import ReserveHistoric from "./pages/teacher/reserve-historic";

import ReservesTeacher from "./pages/admin/reserves-teacher";

import AttendantHome from "./pages/attendant/home";
import AttendantReserves from "./pages/attendant/reserves";
import SideBar from "./components/SideBar";

import Login from "./pages/login";
import Register from "./pages/register";

import calendar from "./assets/calendar.png";
import clock from "./assets/clock.png";
import home from "./assets/home.png";
import product from "./assets/product.png";
import plus from "./assets/plus.png";
import produtosIcon from "./assets/produtosIcon.png";
import historic from "./assets/historic.png";
import AdminInsertNewItem from "./pages/admin/insert-new-item";
import AdminHome from "./pages/admin/home";
import NewStorageSpace from "./pages/admin/new-storage-space";
import Fields from "./pages/admin/fields";

export default function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [attendantUser, setAttendantUser] = useState(
    localStorage.getItem("attendantUser")
  );
  const [teacherUser, setTeacherUser] = useState(
    localStorage.getItem("teacherUser")
  );
  const [adminUser, setAdminUser] = useState(localStorage.getItem("adminUser"));

  function getAdminSideBar() {
    return [
      { to: "/admin/home", img: home, text: "Home" },
      { to: "/admin/cadastrar-item", img: home, text: "Cadastrar item" },
      { to: "/admin/new-storage-space", img: plus, text: "Novo espaço organizacional" },
      { to: "/admin/campos", img: plus, text: "Campos" },
    ];
  }

  function getAttendantSideBar() {
    return [
      { to: "/atendente/home", img: home, text: "Home" },
      {
        to: "/atendente/reservas",
        img: calendar,
        text: "Reservas",
      },
    ];
  }

  function getTeachersideBar() {
    return [
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
      {
        to: "/professor/reservas",
        img: historic,
        text: "Suas reservas",
      },
    ];
  }

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
                    ? getAdminSideBar()
                    : attendantUser
                    ? getAttendantSideBar()
                    : getTeachersideBar()
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
              <Route path="/professor/reservas" element={<TeacherHome />} />
              <Route
                path="/professor/nova-reserva"
                element={<TeacherNewReserve />}
              />
              <Route
                path="/professor/historico-reservas"
                element={<ReserveHistoric />}
              />

              <Route path="admin/home" element={<AdminHome />} />
              <Route
                path="admin/cadastrar-item"
                element={<AdminInsertNewItem />}
              />
              <Route
                path="admin/reservas-professor"
                element={<ReservesTeacher />}
              />
              <Route
                path="admin/new-storage-space"
                element={<NewStorageSpace />}
              />
              <Route path="admin/campos" element={<Fields />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}
