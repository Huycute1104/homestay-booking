import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBed, FaRegCalendarCheck, FaUsers } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/app/Footer/Footer";
import Header1 from "../../components/app/Header/Header1";
import StyleCategorySlider from "../../components/app/Slider";
import { Card } from "../../components/ui/card";
import PaginationCustom from "../../components/ui/PaginationCustom";
import { Skeleton } from "../../components/ui/skeleton";
import { mockHomeStays } from "../../data/mockDat";

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
const RoomCard = (props) => {
  return (
    <motion.div
      variants={item}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={props.roomImageUrls[0]}
          alt={props.roomName}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-white text-xl font-bold truncate">
            {props.homeStayName}
          </h3>
          <p className="text-white/90 text-sm truncate">
            {props.homeStayAddress}
          </p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {props.roomName}
          </h3>
          <p className="text-blue-600 font-medium">
            Phong cách: {props.roomStyleName}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <FaUsers className="text-blue-500" />
            <span>Số khách tối đa: {props.maxGuest}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaRegCalendarCheck className="text-green-500" />
            <span>Số người đã đặt: {props.bookingCount}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaBed className="text-purple-500" />
            <span className="line-clamp-2">
              {props.roomDescription || "Chưa có mô tả"}
            </span>
          </div>
        </div>

        {props.roomPrices.length > 0 && (
          <div className="pt-4 border-t">
            <p className="font-semibold text-gray-800 mb-2">Bảng giá:</p>
            <div className="space-y-2">
              {props.roomPrices.map((price, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{price.comboPriceName}</span>
                  <div>
                    <span className="font-medium text-blue-600">
                      {price.priceWeekday.toLocaleString("vi-VN")}đ
                    </span>
                    <span className="text-gray-500"> - </span>
                    <span className="font-medium text-blue-600">
                      {price.priceWeeked.toLocaleString("vi-VN")}đ
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2 pt-4">
          <Link
            to={`/room/${props.roomID}`}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none text-center"
          >
            Đặt phòng ngay
          </Link>
          <Link
            to={`/room/${props.roomID}`}
            className="flex-1 bg-white text-blue-600 border border-blue-600 font-medium px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-blue-50 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none text-center"
          >
            Xem chi tiết phòng
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
const LoadingSkeleton = () => (
  <>
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
        <Skeleton className="w-full aspect-[4/3]" />
        <div className="p-6 space-y-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 flex-1" />
            <Skeleton className="h-12 flex-1" />
          </div>
        </div>
      </div>
    ))}
  </>
);
const HomeStayDetailsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSize] = useState(10);

  const { homeStayID } = useParams();

  useEffect(() => {
    if (!homeStayID) {
      setError("Home Stay ID is missing.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const homeStay = mockHomeStays.find(
        (homeStay) =>
          homeStay.homeStayID === homeStayID &&
          homeStay.rooms.some((room) => room.roomID === homeStayID)
      );

      if (homeStay) {
        setRooms(homeStay.rooms);
        setTotalItems(homeStay.rooms.length);
      } else {
        setError("Không tìm thấy phòng phù hợp.");
      }

      setLoading(false);
    }, 100);
  }, [homeStayID]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Card className="w-full min-h-screen bg-gray-50">
      <Header1 />
      <div className="border-t border-b py-4 bg-white shadow-sm">
        <StyleCategorySlider />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="container mx-auto px-4 py-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-5">
          {loading ? (
            <LoadingSkeleton />
          ) : error ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full text-center py-8"
            >
              <div className="inline-block bg-red-50 text-red-600 px-6 py-4 rounded-lg">
                <p className="text-lg font-semibold">{error}</p>
              </div>
            </motion.div>
          ) : rooms.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full text-center py-8"
            >
              <div className="inline-block bg-gray-50 text-gray-600 px-6 py-4 rounded-lg">
                <p className="text-lg font-semibold">Không có phòng nào</p>
              </div>
            </motion.div>
          ) : (
            rooms.map((room) => <RoomCard key={room.roomID} {...room} />)
          )}
        </div>

        <PaginationCustom
          currentPage={currentPage}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </motion.div>

      <Footer />
    </Card>
  );
};

export default HomeStayDetailsPage;
