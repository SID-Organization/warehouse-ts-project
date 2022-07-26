import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './index.css'

import Header from './components/header/Header';
import TeacherHome from './pages/teacher/home';

import AttendantHome from './pages/attendant/home';
import SideBar from './pages/attendant/side-bar';

import Login from './pages/login';
    
export default function App() {
    return (
        <>
            <div className="screen-content">
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />

                        <Route path='atendente' element={<Header />}>
                            <Route path='' element={<SideBar />} >
                                <Route path='reservas' element={<AttendantHome />} />
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

