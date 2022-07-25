import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './index.css'

import TeacherHome from './pages/teacher/home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/teacher'>
          <Route path='/home' element={<TeacherHome />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
