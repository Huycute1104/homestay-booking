import Footer from "@/components/app/Footer/Footer";
import Header1 from "@/components/app/Header/Header1";
import { Card } from "@/components/ui/card";
import { getRoomDetails } from "@/services/roomService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomDetailPage = () => {
  const { roomID } = useParams();
  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      if (!roomID) return;
      try {
        const data = await getRoomDetails(roomID);
        setRoom(data);
      } catch (error) {
        console.error("Error fetching room details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRoomDetails();
  }, [roomID]);

  return (
    <Card className="w-full">
      <Header1 />
      <div className="p-8">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : room ? (
          <div>
            <div className="flex flex-wrap justify-center space-x-4 mb-6">
              {room.roomImageUrls?.map((imageUrl, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4"
                >
                  <img
                    src={imageUrl}
                    alt={room.roomName}
                    className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mt-6">
              {room.roomName}
            </h1>
            <p className="text-lg text-gray-600 mt-2">{room.roomStyleName}</p>

            <p className="text-md text-gray-600 mt-4">
              {room.roomDescription || "No description available."}
            </p>

            <div className="mt-6 p-4 border-t-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">
                Home Stay Info
              </h3>
              <div className="mb-4">
                {room.homeStay.imageUrl && (
                  <img
                    src={room.homeStay.imageUrl}
                    alt={room.homeStay.homeStayName}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>
              <p className="text-sm text-gray-600">
                Tên: {room.homeStay.homeStayName}
              </p>
              <p className="text-sm text-gray-600">
                Địa chỉ: {room.homeStay.homeStayAddress}
              </p>
              <p className="text-sm text-gray-600">
                Số điện thoại: {room.homeStay.phoneNumber}
              </p>
            </div>

            <div className="mt-6 p-4 border-t-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">Combo</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {room.roomPrices?.map((price, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 border rounded-lg shadow-sm w-full"
                  >
                    <h4 className="text-md font-semibold text-gray-700">
                      {price.comboPriceName}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Tuần:{" "}
                      <span className="font-semibold">
                        {price.priceWeekday?.toLocaleString()} VND
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Cuối tuần:{" "}
                      <span className="font-semibold">
                        {price.priceWeeked?.toLocaleString()} VND
                      </span>
                    </p>
                    <p className="text-sm text-gray-600">
                      Holiday Fee:{" "}
                      <span className="font-semibold">{price.holidayFee}%</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">Room not found</div>
        )}
      </div>
      <Footer />
    </Card>
  );
};

export default RoomDetailPage;
