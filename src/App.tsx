import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import './index.css'

import Header from './components/header/Header';
import TeacherHome from './pages/teacher/home';

import AttendantHome from './pages/attendant/home';
import PendentReserves from './pages/attendant/pendent-reserves';
import AttendantSideBar from './pages/attendant/side-bar';

import Login from './pages/login';

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
                                    <Route path='reservas' element={<AttendantHome />} />
                                    <Route path='reservas-pendentes' element={<PendentReserves />} />
                                </Route>
                            </Route>
                        </Route>

                        <Route path='/teacher'>
                            <Route path='home' element={<TeacherHome />} />
                        </Route>
                    </Routes>
                </Router>
            </div>
        </>
    )
}

