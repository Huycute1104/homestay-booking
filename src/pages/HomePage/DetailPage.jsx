import Footer from "../../components/app/Footer/Footer";
import Header1 from "../../components/app/Header/Header1";
import StyleCategorySlider from "../../components/app/Slider";
import { Card } from "../../components/ui/card";
import PaginationCustom from "../../components/ui/PaginationCustom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBed, FaRegCalendarCheck, FaUsers } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { mockHomeStays } from "../../data/mockDat"; 
const HomeStayDetailsPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSize] = useState(10);

  const { roomID } = useParams();

  useEffect(() => {
    if (!roomID) {
      setError("Room ID is missing.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const filtered = mockHomeStays.filter((room) => room.roomID === roomID);
      console.log("Found room:", found); // xem kết quả lọc
      if (filtered.length > 0) {
        setRooms(filtered);
        setTotalItems(filtered.length);
      } else {
        setError("Không tìm thấy phòng phù hợp.");
      }
      setLoading(false);
    }, 800); 
  }, [roomID]);

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
