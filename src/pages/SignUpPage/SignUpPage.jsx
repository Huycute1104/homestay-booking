import Header from "../../components/app/Header/Header";
import Footer from "../../components/app/Footer/Footer";
import FeatureSection from "../../components/app/SectionHomePage/FeatureSection";
import { Helmet } from "react-helmet-async";
import SignUpForm from "./components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="sign-up-page w-full bg-white relative overflow-hidden mx-auto">
      <Header />
      <div className="sign-up-content flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-12 mt-24">
        <div className="signup-form-container relative z-20 p-8 max-w-[415px] w-full mt-[10px] mx-auto md:mt-0 md:mx-12">
          <SignUpForm />
        </div>

        <div className="flex-1 flex items-center relative z-10 justify-center mb-5 md:mb-0">
          <FeatureSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
