
import './App.css'
import NotFound from './components/common/NotFound'
import Signup from './components/common/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/visitors/Home'
import Login from './components/common/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Admin/Dashboard'
import ListClient from './components/Admin/ListClient'
import ProduitClient from './components/Admin/ProduitClient'
import Client from './components/Client/Client'
import Postuler from './components/Client/Postuler'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/ListClient" element={<ListClient />} />
        <Route path="/ProduitClient" element={<ProduitClient/>} />
        <Route path="/client" element={<Client/>} />
        <Route path="/Postuler" element={<Postuler/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App