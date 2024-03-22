
import './App.css'
import NotFound from './components/common/NotFound'
import Signup from './components/common/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/common/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Admin/Dashboard'
import ListClient from './components/Admin/ListClient'
import ProduitClient from './components/Admin/ProduitClient'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './pages/visitors/Home'

function App() {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:8000/api/produits");
      setProducts(result.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (Object.entries(products).length === 0) {
      fetchData();
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/ListClient" element={<ListClient />} />
        <Route path="/ProduitClient" element={<ProduitClient />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App