import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import LoginForm from './component/LoginForm'
import Dashboard from './pages/Dashboard'
import Login from './pages/login'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm/>} ></Route>
          <Route path="/" element={<Login/>} ></Route>
          <Route path="/dashboard" element={<Dashboard/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}