/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  X,
  ZoomIn,
  ZoomOut,
  Users,
  CalendarCheck,
  BadgeDollarSign,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export function HotelRoomCard2({ roomData }) {
  const roomStyleName =
    roomData.roomStyle?.roomStyleName || roomData.roomStyleName || "Không rõ";
  const roomImageUrls =
    roomData.roomImageDTOs?.map((img) => img.roomImageUrl) ||
    roomData.roomImageUrls ||
    [];

  const roomName = roomData.roomName || "Tên phòng không rõ";
  const description = roomData.roomDescription || "";
  const maxGuest = roomData.maxGuest || 1;
  const bookingCount = roomData.bookingCount || 0;
  const minPrice =
    roomData.roomPrices?.length > 0
      ? Math.min(...roomData.roomPrices.map((p) => p.price))
      : null;

  const [showAllImages, setShowAllImages] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleToggleImages = () => {
    setShowAllImages(!showAllImages);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsZoomed(false);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? roomImageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === roomImageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (isModalOpen) {
        switch (event.key) {
          case "ArrowLeft":
            handlePrevImage();
            break;
          case "ArrowRight":
            handleNextImage();
            break;
          case "Escape":
            closeModal();
            break;
          default:
            break;
        }
      }
    },
    [isModalOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Card className="w-full max-w-6xl mx-auto border-none shadow-none mt-4 px-4 sm:px-6 lg:px-8">
      <CardHeader className="px-0 pb-2">
        <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-900">
          {roomName}
        </CardTitle>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-gray-600 text-xs sm:text-sm">
            ({bookingCount} lượt đặt)
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{description}</p>
      </CardHeader>

      <CardContent className="p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          <div className="sm:col-span-1 lg:col-span-7 relative w-full h-64 sm:h-80 lg:h-full overflow-hidden rounded-xl">
            <img
              src={roomImageUrls[0]}
              alt="Room Image"
              className="object-cover w-full h-full cursor-pointer"
              onClick={() => handleImageClick(0)}
            />
          </div>

          <div className="sm:col-span-1 lg:col-span-5 grid grid-cols-1 gap-4">
            {roomImageUrls[1] && (
              <div className="relative w-full h-40 sm:h-48 lg:h-full overflow-hidden rounded-xl">
                <img
                  src={roomImageUrls[1]}
                  alt="Room Image"
                  className="object-cover w-full h-full cursor-pointer"
                  onClick={() => handleImageClick(1)}
                />
              </div>
            )}
            {roomImageUrls[2] && (
              <div className="relative w-full h-40 sm:h-48 lg:h-full overflow-hidden rounded-xl">
                <img
                  src={roomImageUrls[2]}
                  alt="Room Image"
                  className="object-cover w-full h-full cursor-pointer"
                  onClick={() => handleImageClick(2)}
                />
              </div>
            )}
          </div>
        </div>

        {roomImageUrls.length > 3 && !showAllImages && (
          <button
            onClick={handleToggleImages}
            className="text-blue-500 mt-4 hover:underline text-sm sm:text-base"
          >
            Xem thêm {roomImageUrls.length - 3} ảnh
          </button>
        )}

        {showAllImages && (
          <div className="mt-4">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="mySwiper"
            >
              {roomImageUrls.slice(3).map((imageUrl, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={imageUrl}
                      alt={`Room Image ${index + 4}`}
                      className="object-cover w-full h-full rounded-xl cursor-pointer"
                      onClick={() => handleImageClick(index + 3)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={handleToggleImages}
              className="text-blue-500 mt-4 hover:underline text-sm sm:text-base"
            >
              Ẩn ảnh
            </button>
          </div>
        )}

        <div className="mt-4 flex items-center flex-wrap gap-4 text-sm sm:text-base text-gray-700">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Tối đa {maxGuest} khách
          </div>
          <div className="flex items-center gap-2">
            <CalendarCheck className="w-4 h-4" />
            Phong cách {roomStyleName}
          </div>
          {minPrice && (
            <div className="flex items-center gap-2 text-green-600 font-semibold">
              <BadgeDollarSign className="w-4 h-4" />
              Từ {minPrice.toLocaleString("vi-VN")}đ / đêm
            </div>
          )}
        </div>
      </CardContent>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full sm:w-11/12 sm:h-5/6 md:w-4/5 md:h-4/5 lg:w-3/4 lg:h-3/4 xl:w-2/3 xl:h-2/3 bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={roomImageUrls[currentImageIndex]}
                alt={`Room Image ${currentImageIndex + 1}`}
                className={`object-contain w-full h-full transition-transform duration-300 ease-in-out ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
              />
            </div>

            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={toggleZoom}
                className="text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition-all"
              >
                {isZoomed ? (
                  <ZoomOut className="w-6 h-6" />
                ) : (
                  <ZoomIn className="w-6 h-6" />
                )}
              </button>
              <button
                onClick={closeModal}
                className="text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-gray-800 px-3 py-1 rounded-full">
              {currentImageIndex + 1} / {roomImageUrls.length}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
