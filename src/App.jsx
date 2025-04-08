import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage.jsx"
import LoginPage from "@/pages/LoginPage/LoginPage";
import HomeListBookingPage from "./pages/HomePage/HomeListBooking.jsx"
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx"
import AboutUsPage from "./pages/AboutUs/AboutUsPage.jsx"
import ContactPage from "./pages/Contact/ContactPage.jsx"
import './App.css'
import ProductListPage from "./pages/TestPage/ProductListPage .jsx"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="*" element={<HomeListBookingPage />} />
        <Route path="/homestay" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
