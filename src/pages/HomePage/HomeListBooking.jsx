import DateSelector from "@/components/app/BookingPage/DateSelector";
import CustomerTestimonials from "@/components/app/CustomerTestimonials";
import FAQ from "@/components/app/FAQ";
import FeaturedServices from "@/components/app/FeaturedServices";
import Footer from "@/components/app/Footer/Footer";
import Header1 from "@/components/app/Header/Header1";
import StyleCategorySlider from "@/components/app/Slider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getRoomListBooking } from "@/services/homeService";
import { transformToCheckInTime } from "@/utils/helper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaBed, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const IconWrapper = ({ children, color }) => (
  <motion.div
    className={`flex items-center justify-center w-8 h-8 rounded-full ${color}`}
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.div>
);

const RoomCard = ({ room }) => (
  <motion.div
    variants={item}
    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
  >
    <Link to={`/room/${room.roomID}`} className="block relative overflow-hidden">
      <img
        src={
          room.roomImage ||
          "https://res.cloudinary.com/dmyyf65yy/image/upload/v1724556044/fiverr/ganfguhq97blku57tog3.jpg"
        }
        alt={room.roomName}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>

    <div className="p-6 space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {room.roomName}
        </h2>
        <span className="inline-block mt-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
          {room.roomStyleName}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <IconWrapper color="bg-blue-50">
            <FaUsers className="w-4 h-4 text-blue-600" />
          </IconWrapper>
          <span className="text-gray-600">Số khách tối đa: {room.maxGuest}</span>
        </div>

        <div className="flex items-center gap-3">
          <IconWrapper color="bg-purple-50">
            <FaMapMarkerAlt className="w-4 h-4 text-purple-600" />
          </IconWrapper>
          <span className="text-gray-600">{room.homeStayName}</span>
        </div>

        <div className="flex items-center gap-3">
          <IconWrapper color="bg-green-50">
            <FaCalendarAlt className="w-4 h-4 text-green-600" />
          </IconWrapper>
          <span className="text-gray-600">Số người đã đặt: {room.bookingCount}</span>
        </div>

        <div className="flex items-start gap-3">
          <IconWrapper color="bg-amber-50">
            <FaBed className="w-4 h-4 text-purple-500" />
          </IconWrapper>
          <p className="text-gray-600 text-sm leading-relaxed mt-1">
            {room.roomDescription || "Chưa có mô tả"}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const LoadingSkeleton = () => (
  <>
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <Skeleton className="w-full h-64" />
        <div className="p-6 space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/3" />
          <div className="space-y-3">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
          <div className="flex gap-3 pt-4">
            <Skeleton className="h-10 flex-1" />
            <Skeleton className="h-10 flex-1" />
          </div>
        </div>
      </div>
    ))}
  </>
);

const HomeListBookingPage = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getRoomListBooking();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <Card className="w-full min-h-screen bg-gray-50">
      <Helmet>
        <title>Trang chủ - Hidden Oasis</title>
        <meta name="description" content="Xin chào đến với Hidden Oasis" />
      </Helmet>
      <Header1 />
      <div className="border-t border-b py-4 bg-white shadow-sm">
        <StyleCategorySlider />
      </div>

      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Chọn thời gian để tìm kiếm phòng
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Hãy chọn thời gian bắt đầu và kết thúc để tìm các phòng homestay còn trống
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
            <div className="w-full md:w-1/2">
              <DateSelector
                label="Chọn thời gian bắt đầu"
                value={startTime}
                onChange={setStartTime}
                className="text-left"
              />
            </div>
            <div className="w-full md:w-1/2">
              <DateSelector
                label="Chọn thời gian kết thúc"
                value={endTime}
                onChange={setEndTime}
                className="text-left"
              />
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <Link
              to={`/search?${
                startTime ? `startTime=${transformToCheckInTime(startTime)}` : ""
              }${endTime ? `&endTime=${transformToCheckInTime(endTime)}` : ""}`}
            >
              <Button className="bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] text-white px-8 py-6 text-sm font-semibold rounded-xl">
                Tìm kiếm
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 py-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            <LoadingSkeleton />
          ) : rooms.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full text-center py-8"
            >
              <div className="inline-block bg-gray-50 text-gray-600 px-6 py-4 rounded-lg">
                <p className="text-lg font-semibold">Không tìm thấy phòng nào</p>
              </div>
            </motion.div>
          ) : (
            rooms.map((room) => <RoomCard key={room.roomID} room={room} />)
          )}
        </div>
      </motion.div>

      <CustomerTestimonials />
      <FeaturedServices />
      <FAQ />
      <Footer />
    </Card>
  );
};

export default HomeListBookingPage;
