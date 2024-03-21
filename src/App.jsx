import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NotFound from './components/common/NotFound'
import Signup from './components/common/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/visitors/Home'
import Login from './components/common/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
