import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage.jsx"
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import HomeListBookingPage from "./pages/HomePage/HomeListBooking.jsx"
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx"
import AboutUsPage from "./pages/AboutUs/AboutUsPage.jsx"
import ContactPage from "./pages/Contact/ContactPage.jsx"
import BookingHistoryPage from "./pages/UserProfile/components/BookingHistoryPage.jsx"
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage.jsx"
import BookingPage from "./pages/Booking/BookingPage.jsx"
import './App.css'
import ProductListPage from "./pages/TestPage/ProductListPage .jsx"
import HomeStayDetailsPage from "./pages/HomePage/DetailPage.jsx";


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
        <Route path="/booking-history" element={<BookingHistoryPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/homestay/:homeStayID" element={<HomeStayDetailsPage />} />
        <Route path="/room/:roomID" element={<BookingPage />} />
      </Routes>
    </Router>
  )
}

export default App
