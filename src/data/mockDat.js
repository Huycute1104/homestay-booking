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
          "https://rosaceae.id.vn/Images/9e1d2f8f-05e5-45ea-8b46-d570193413e3_2.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
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
      {
        roomID: "2",
        roomName: "Standard Room",
        roomDescription: "Phòng tiêu chuẩn cho 2 người.",
        roomStyleName: "Tối giản",
        maxGuest: 2,
        bookingCount: 5,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/9e1d2f8f-05e5-45ea-8b46-d570193413e3_2.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo tiêu chuẩn",
            priceWeekday: 600000,
            priceWeeked: 750000,
            holidayFee: 8,
          },
        ],
      },
      {
        roomID: "3",
        roomName: "Luxury Suite",
        roomDescription: "Phòng cao cấp với nội thất sang trọng.",
        roomStyleName: "Sang trọng",
        maxGuest: 3,
        bookingCount: 7,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/9e1d2f8f-05e5-45ea-8b46-d570193413e3_2.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo sang trọng",
            priceWeekday: 1500000,
            priceWeeked: 1800000,
            holidayFee: 20,
          },
        ],
      },
      {
        roomID: "4",
        roomName: "Family Room",
        roomDescription: "Phòng phù hợp cho gia đình từ 4-5 người.",
        roomStyleName: "Ấm cúng",
        maxGuest: 5,
        bookingCount: 9,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/9e1d2f8f-05e5-45ea-8b46-d570193413e3_2.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo gia đình",
            priceWeekday: 1200000,
            priceWeeked: 1400000,
            holidayFee: 15,
          },
        ],
      },
      {
        roomID: "5",
        roomName: "Couple Suite",
        roomDescription: "Phòng lãng mạn dành cho cặp đôi.",
        roomStyleName: "Lãng mạn",
        maxGuest: 2,
        bookingCount: 11,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/9e1d2f8f-05e5-45ea-8b46-d570193413e3_2.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo đôi",
            priceWeekday: 900000,
            priceWeeked: 1100000,
            holidayFee: 12,
          },
        ],
      },
      {
        roomID: "6",
        roomName: "Backpacker Room",
        roomDescription: "Phòng tập thể cho dân phượt.",
        roomStyleName: "Thân thiện",
        maxGuest: 6,
        bookingCount: 20,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/9e1d2f8f-05e5-45ea-8b46-d570193413e3_2.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo tiết kiệm",
            priceWeekday: 300000,
            priceWeeked: 400000,
            holidayFee: 5,
          },
        ],
      },
      {
        roomID: "7",
        roomName: "Garden View",
        roomDescription: "Phòng với view nhìn ra vườn xanh mát.",
        roomStyleName: "Tự nhiên",
        maxGuest: 3,
        bookingCount: 8,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/9e1d2f8f-05e5-45ea-8b46-d570193413e3_2.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo vườn",
            priceWeekday: 700000,
            priceWeeked: 850000,
            holidayFee: 10,
          },
        ],
      },
      {
        roomID: "8",
        roomName: "Penthouse",
        roomDescription: "Phòng áp mái cao cấp với sân riêng.",
        roomStyleName: "Hiện đại",
        maxGuest: 4,
        bookingCount: 4,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/9e1d2f8f-05e5-45ea-8b46-d570193413e3_2.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo penthouse",
            priceWeekday: 2000000,
            priceWeeked: 2500000,
            holidayFee: 25,
          },
        ],
      },
      {
        roomID: "9",
        roomName: "Studio Room",
        roomDescription: "Phòng studio tiện nghi, đầy đủ nội thất.",
        roomStyleName: "Sáng tạo",
        maxGuest: 2,
        bookingCount: 6,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/9e1d2f8f-05e5-45ea-8b46-d570193413e3_2.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo studio",
            priceWeekday: 750000,
            priceWeeked: 900000,
            holidayFee: 9,
          },
        ],
      },
      {
        roomID: "10",
        roomName: "Business Room",
        roomDescription: "Phòng dành cho doanh nhân công tác.",
        roomStyleName: "Chuyên nghiệp",
        maxGuest: 2,
        bookingCount: 10,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/9e1d2f8f-05e5-45ea-8b46-d570193413e3_2.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo công tác",
            priceWeekday: 850000,
            priceWeeked: 950000,
            holidayFee: 11,
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
        roomID: "1",
        roomName: "Family 2 Beds",
        roomDescription: "Phù hợp cho gia đình 4 người.",
        roomStyleName: "Ấm cúng",
        maxGuest: 5,
        bookingCount: 9,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
        roomPrices: [
          {
            comboPriceName: "Combo gia đình",
            priceWeekday: 1200000,
            priceWeeked: 1400000,
            holidayFee: 15,
          },
        ],
      },
      {
        roomID: "2",
        roomName: "Family 2 Beds",
        roomDescription: "Phù hợp cho gia đình 4 người.",
        roomStyleName: "Ấm cúng",
        maxGuest: 5,
        bookingCount: 9,
        roomImageUrls: [
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/cae389c2-62a7-4de0-8d1e-99589204f9a6_1.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
          "https://rosaceae.id.vn/Images/5210c626-9205-46b0-9373-320039f7900b_4.jpg",
        ],
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
