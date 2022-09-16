import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Auth from './components/Auth.jsx'
import Profile from './pages/Profile.jsx'
import Public from './pages/Public.jsx'
import "./App.css"
import { UserContext } from './context/UserProvider.jsx'

export default function App(){
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
      <Router>
      <Nav 
          logout={logout}
        />
        <Routes>
          <Route 
            path="/" 
            element={token ? <Navigate to="/profile" /> : <Auth />}
          />
          <Route 
            path="/profile"
            element={<Profile />}
          />
          <Route 
            path="/public"
            element={<Public />}
          />
        </Routes>
      </Router>
    </div>
  )
}