import Footer from "../../components/app/Footer/Footer";
import Header from "../../components/app/Header/Header";
import FeatureSection from "../../components/app/SectionHomePage/FeatureSection";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full bg-white relative overflow-hidden">
      <Header />
      <div className="flex flex-col md:flex-row justify-between px-4 md:px-12 mb-7">
        <div className="flex justify-center items-center md:mb-0 md:w-1/2 relative mt-32">
          <ForgotPasswordForm />
        </div>
        <div className="flex justify-center items-center md:w-1/2 mt-32">
          <FeatureSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
