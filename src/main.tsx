import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './index.css'

import Header from './components/header/Header';
import TeacherHome from './pages/teacher/home';

import AttendantHome from './pages/attendant/home';

import Login from './pages/login';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>

    <div className="screen-content">
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/attendant' element={<AttendantHome />} />
        <Route path='/teacher'>
          <Route path='home' element={<TeacherHome />} />
        </Route>
      </Routes>
    </Router>
    </div>
  </React.StrictMode>
)
