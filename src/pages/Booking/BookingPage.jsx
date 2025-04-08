import BookingForm from "../../components/app/BookingPage/BookingForm";
import { LocationAmenities } from "../../components/app/convenience";
import Footer from "../../components/app/Footer/Footer";
import Header1 from "../../components/app/Header/Header1";
import { HotelRoomCard } from "../../components/app/HotelRoomCard";
import { HotelRoomCard2 } from "../../components/app/HotelRoomCard2";
import { Card } from "../../components/ui/card";
import Loading from "../../components/ui/loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mockHomeStays } from "../../data/mockDat";

const BookingPage = () => {
  const [roomData, setRoomData] = useState(null);
  const { roomID } = useParams();

  useEffect(() => {
    if (roomID) {
      const allRooms = mockHomeStays.flatMap((homeStay) =>
        homeStay.rooms.map((room) => ({
          ...room,
          homeStay,
        }))
      );

      const foundRoom = allRooms.find((room) => String(room.roomID) === String(roomID));

      console.log("roomID param:", roomID);
      console.log("foundRoom:", foundRoom);

      setRoomData(foundRoom || null);
    }
  }, [roomID]);

  if (!roomData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
        <p className="text-gray-500 mt-4">Đang tải hoặc không tìm thấy phòng với ID: {roomID}</p>
      </div>
    );
  }

  const {
    roomPrices = [],
    maxGuest = 1,
    homeStay: { homeStayID } = {},
  } = roomData;

  return (
    <Card className="min-h-screen bg-background">
      <Header1 />
      <div className="border-t border-b border-border" />

      <main className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 sm:py-8 lg:py-12">
            <HotelRoomCard2 roomData={roomData} />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 py-6">
            <div className="w-full lg:w-1/2 lg:ml-16">
              <LocationAmenities />
            </div>
            <div className="w-full lg:w-1/2">
              <BookingForm
                combos={roomPrices}
                maxGuest={maxGuest}
                homeStayID={homeStayID}
                data={roomData}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Card>
  );
};

export default BookingPage;
