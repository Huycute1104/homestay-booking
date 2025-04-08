import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage.jsx"
import './App.css'
import ProductListPage from "./pages/TestPage/ProductListPage .jsx"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ProductListPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
