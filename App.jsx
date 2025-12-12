import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Admin from './pages/Admin'

export default function App(){
  return (
    <div>
      <header className="header">
        <div className="brand"><Link to="/">Jaycrest</Link></div>
        <nav className="nav">
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/admin">Admin</Link>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </main>
    </div>
  )
}
