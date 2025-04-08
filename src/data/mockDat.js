// src/mocks/mockData.js

export const mockHomeStays = [
  {
    homeStayID: "1",
    homeStayName: "Hidden Oasis",
    homeStayAddress: "710 Trần Cao Vân, Đà Nẵng",
    phoneNumber: "0909 123 456",
    imageUrl:
      "https://res.cloudinary.com/da3m7fj99/image/upload/v1733306834/Hidden_Oasis_diqeit.jpg",
    rooms: [
      {
        roomID: "1",
        roomName: "Deluxe Sea View",
        roomDescription: "Phòng rộng rãi, ban công hướng biển.",
        roomStyleName: "Hiện đại",
        maxGuest: 4,
        bookingCount: 12,
        roomImageUrls: [
          "https://via.placeholder.com/400x300",
          "https://via.placeholder.com/400x300?img=2",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo thường",
            priceWeekday: 800000,
            priceWeeked: 1000000,
            holidayFee: 10,
          },
        ],
      },
    ],
  },
  {
    homeStayID: "2",
    homeStayName: "Hidden Oasis 2",
    homeStayAddress: "456 Trần Phú, Hội An",
    phoneNumber: "0987 654 321",
    imageUrl:
      "https://res.cloudinary.com/da3m7fj99/image/upload/v1733306834/Hidden_Oasis_diqeit.jpg",
    rooms: [
      {
        roomID: "2",
        roomName: "Family 2 Beds",
        roomDescription: "Phù hợp cho gia đình 4 người.",
        roomStyleName: "Ấm cúng",
        maxGuest: 5,
        bookingCount: 9,
        roomImageUrls: ["https://via.placeholder.com/400x300"],
        roomPrices: [
          {
            comboPriceName: "Combo gia đình",
            priceWeekday: 1200000,
            priceWeeked: 1400000,
            holidayFee: 15,
          },
        ],
      },
    ],
  },
];
