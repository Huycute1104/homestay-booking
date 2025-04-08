import Footer from "@/components/app/Footer/Footer";
import Header1 from "@/components/app/Header/Header1";
import { Skeleton } from "@/components/ui/skeleton";
import { getRoomsByStyle } from "@/services/homeService";
import { motion } from "framer-motion";
import { Calendar, Home, MapPin, Star, Users } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useParams } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
    <div className="relative overflow-hidden aspect-video">
      <img
        src={
          room.roomImage !== "image"
            ? room.roomImage
            : "/placeholder.svg?height=400&width=600"
        }
        alt={room.roomName}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium">4.8</span>
        </div>
      </div>
    </div>

    <div className="p-6 space-y-4">
      <div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {room.roomName}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <MapPin className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-gray-600">{room.homeStayName}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <IconWrapper color="bg-blue-50">
            <Users className="w-4 h-4 text-blue-600" />
          </IconWrapper>
          <span className="text-gray-600">
            Số khách tối đa: {room.maxGuest}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <IconWrapper color="bg-green-50">
            <Calendar className="w-4 h-4 text-green-600" />
          </IconWrapper>
          <span className="text-gray-600">
            Số người đã đặt: {room.bookingCount}
          </span>
        </div>

        <div className="flex items-start gap-3">
          <IconWrapper color="bg-purple-50">
            <Home className="w-4 h-4 text-purple-600" />
          </IconWrapper>
          <p className="text-gray-600 text-sm leading-relaxed">
            {room.roomDescription || "Chưa có mô tả chi tiết"}
          </p>
        </div>
      </div>

      <div className="pt-4 flex gap-3">
        <Link
          to={`/room/${room.roomID}`}
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-center text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
        >
          Đặt phòng ngay
        </Link>
        <Link
          to={`/room/${room.roomID}`}
          className="flex-1 bg-white text-blue-600 border border-blue-600 text-center text-sm font-medium px-4 py-2.5 rounded-full transition-all duration-300 hover:bg-blue-50 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  </motion.div>
);

const LoadingSkeleton = () => (
  <>
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <Skeleton className="w-full aspect-video" />
        <div className="p-6 space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="space-y-3">
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

export default function RoomStylePage() {
  const { roomStyleID } = useParams();
  const { state } = useLocation();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const roomStyleName = state?.roomStyleName;

  const fetchRooms = useCallback(async () => {
    if (roomStyleID) {
      try {
        const fetchedRooms = await getRoomsByStyle(roomStyleID);
        setRooms(fetchedRooms);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      } finally {
        setLoading(false);
      }
    }
  }, [roomStyleID]);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Phong cách - Hidden Oasis</title>
        <meta name="description" content="Xin chào đến với Hidden Oasis" />
      </Helmet>
      <Header1 />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Phòng theo phong cách {roomStyleName || "Việt Nam"}
          </h2>
          <p className="text-gray-600 mt-2">
            Khám phá không gian độc đáo và tiện nghi
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {loading ? (
            <LoadingSkeleton />
          ) : rooms.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full text-center py-8"
            >
              <div className="inline-block bg-white px-6 py-4 rounded-lg shadow-md">
                <p className="text-lg text-gray-600">
                  Không tìm thấy phòng nào cho phong cách này
                </p>
              </div>
            </motion.div>
          ) : (
            rooms.map((room) => <RoomCard key={room.roomID} room={room} />)
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
