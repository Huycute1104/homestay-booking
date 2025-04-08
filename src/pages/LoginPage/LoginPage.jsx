import React from "react";
import Header from "../../components/app/Header/Header";
import Footer from "../../components/app/Footer/Footer";
import FeatureSection from "../../components/app/SectionHomePage/FeatureSection";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="login-page w-full bg-white relative overflow-hidden">
      {/* Bỏ Helmet */}
      <Header />
      <div className="login-content flex flex-col md:flex-row justify-between px-4 md:px-12 mb-7">
        <div className="flex justify-center items-center mb-8 md:mb-0 md:w-1/2 relative z-10 mt-24">
          <LoginForm />
        </div>
        <div className="flex justify-center items-center md:w-1/2 z-1">
          <FeatureSection />
        </div>
      </div>
      <Footer />
    </div>
  );  
}
