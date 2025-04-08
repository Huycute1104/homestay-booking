import Footer from "../../components/app/Footer/Footer";
import Header1 from "../../components/app/Header/Header1";
import StyleCategorySlider from "../../components/app/Slider";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Skeleton } from "../../components/ui/skeleton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBed,
  FaExclamationCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Animation configs
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Dữ liệu giả
const fakeHomeStays = [
  {
    homeStayID: 1,
    homeStayName: "Hidden Oasis",
    homeStayAddress: "710 Trần Cao VânXuân Hà, Thanh Khê, Đà Nẵng, Việt Nam",
    phoneNumber: "0909 123 456",
    imageUrl: "https://res.cloudinary.com/da3m7fj99/image/upload/v1733306834/Hidden_Oasis_diqeit.jpg",
  },
  {
    homeStayID: 2,
    homeStayName: "Hidden Oasis 2",
    homeStayAddress: "456 Biển Xanh, Phú Quốc",
    phoneNumber: "0987 654 321",
    imageUrl: "https://res.cloudinary.com/da3m7fj99/image/upload/v1733306834/Hidden_Oasis_diqeit.jpg",
  }
];

const HomePage = () => {
  const [homeStays, setHomeStays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Homestay - Hidden Oasis";
    const timer = setTimeout(() => {
      setHomeStays(fakeHomeStays);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-xl">
          <Skeleton className="w-full h-64" />
          <div className="p-6 space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-20 w-full" />
            <div className="flex justify-between pt-6">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Card className="w-full rounded-lg shadow-lg bg-gray-50">
      <Header1 />
      <div className="border-t border-b">
        <StyleCategorySlider />
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        {isLoading ? (
          <LoadingSkeleton />
        ) : homeStays.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8 text-gray-600"
          >
            Không tìm thấy homestay
          </motion.div>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8"
          >
            {homeStays.map((homeStay) => (
              <motion.div
                key={homeStay.homeStayID}
                variants={item}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Link to={`/homestay/${homeStay.homeStayID}`}>
                  <div className="relative overflow-hidden">
                    <img
                      src={homeStay.imageUrl}
                      alt={homeStay.homeStayName}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        <span className="text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {homeStay.homeStayName}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <div className="flex-shrink-0 w-5">
                        <FaMapMarkerAlt className="text-blue-500" />
                      </div>
                      <span className="text-lg truncate">
                        {homeStay.homeStayAddress}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <div className="flex-shrink-0 w-5">
                        <FaPhoneAlt className="text-green-500" />
                      </div>
                      <span className="text-sm">{homeStay.phoneNumber}</span>
                    </div>
                    <div className="flex space-x-2 text-gray-600">
                      <div className="flex-shrink-0 w-5 mt-1">
                        <FaBed className="text-purple-500" />
                      </div>
                      <span className="text-sm">
                        Tiện nghi: Phòng thoải mái, sạch sẽ, thiết kế hiện đại.
                      </span>
                    </div>
                    <div className="flex justify-between pt-6 gap-4">
                      <Button className="bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none w-auto">
                        Chọn Phòng
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <Footer />
    </Card>
  );
};

export default HomePage;
