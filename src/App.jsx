
import './App.css'
import NotFound from './components/common/NotFound'
import Signup from './components/common/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/visitors/Home'
import Login from './components/common/Login'
import 'bootstrap/dist/css/bootstrap.min.css'

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