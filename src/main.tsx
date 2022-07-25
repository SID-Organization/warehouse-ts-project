import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './index.css'

import Header from './components/header/Header';
import TeacherHome from './pages/teacher/home';

<<<<<<< HEAD
import AttendantHome from './pages/attendant/home';

import Login from './pages/login';
=======
import Login from './pages/login/index';
>>>>>>> b85a08cfa62dc3cc8e3002158e0afc09493f5c47

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>

    <div className="screen-content">
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/login" element={<Login/>} />
        <Route path='/attendant' element={<AttendantHome />} />
=======
        <Route path="/login" element={<Login />} />
>>>>>>> b85a08cfa62dc3cc8e3002158e0afc09493f5c47
        <Route path='/teacher'>
          <Route path='home' element={<TeacherHome />} />
        </Route>
      </Routes>
    </Router>
    </div>
  </React.StrictMode>
)
