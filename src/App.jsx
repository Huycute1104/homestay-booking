import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage.jsx"
import LoginPage from "@/pages/LoginPage/LoginPage";
import './App.css'
import ProductListPage from "./pages/TestPage/ProductListPage .jsx"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ProductListPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
