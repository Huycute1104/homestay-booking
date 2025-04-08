import React from "react";
import { Home, Users } from "lucide-react";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";

/*
  room = {
    roomID: string,
    roomName: string,
    roomDescription: string,
    maxGuest: number,
    roomImageDTOs: [{ roomImageUrl: string }],
    roomStyle?: { roomStyleName: string },
    homeStay?: { homeStayName: string },
  }
*/

const RoomCard = ({ room }) => {
  const { roomID, roomName, roomDescription, maxGuest } = room;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <Link to={`/room/${roomID}`} className="block relative overflow-hidden group">
        <img
          src={
            room.roomImageDTOs?.[0]?.roomImageUrl ||
            "https://res.cloudinary.com/dmyyf65yy/image/upload/v1724556044/fiverr/ganfguhq97blku57tog3.jpg"
          }
          alt={roomName}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {roomName}
          </h2>
          <span className="inline-block mt-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
            Phong cách: {room.roomStyle?.roomStyleName || "Không xác định"}
          </span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-gray-600">Số khách tối đa: {maxGuest}</span>
          </div>

          <div className="flex items-center gap-3">
            <Home className="h-5 w-5 text-purple-600" />
            <span className="text-gray-600">{room.homeStay?.homeStayName || "Không xác định"}</span>
          </div>

          <div className="flex items-start gap-3">
            <FaBed className="w-4 h-4 text-purple-500 mt-1" />
            <p className="text-gray-600 text-sm leading-relaxed">
              {roomDescription || "Chưa có mô tả"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
