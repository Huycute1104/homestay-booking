import MainContent from "./components/MainContent";
import Header1 from "../../components/app/Header/Header1";
import Footer from "../../components/app/Footer/Footer";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header1 />
      <main className="flex-grow">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}
