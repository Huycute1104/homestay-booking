import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import Loading from "../../../components/ui/loading";
import PaginationCustom from "../../../components/ui/PaginationCustom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import BookingDetailsModal from "./BookingDetailsModal";
import RatingModal from "./RatingModal";
import { StatusBadge } from "./StatusBadge";

const BookingHistory = () => {
  const [bookingHistoryData, setBookingHistoryData] = useState([
    {
      bookingID: 1,
      bookingCode: "BK001",
      customerName: "Nguyễn Văn A",
      customerPhone: "0123456789",
      bookingDate: "2024-04-01T00:00:00Z",
      bookingStatus: 2,
      totalPrice: 1500000,
      homeStayID: "HS001",
      isRated: false,
      transactions: [
        {
          transactionID: "TX001",
          transactionCode: "TX001",
          amount: 1500000,
          transactionAmount: 1500000,
          paymentMethod: 0, // 0 = Thẻ, 1 = Tiền mặt
          transactionStatus: 1, // 1 = Hoàn tất
          urlPayment: "https://example.com/transaction/TX001",
        },
      ],
      bookingDetails: [
        {
          checkIn: "2024-04-01T14:00:00Z",
          checkOut: "2024-04-03T12:00:00Z",
          guestNumber: 2,
          roomPrice: {
            roomDTO: { roomName: "Phòng Deluxe 101" },
          },
        },
      ],
    },
    {
      bookingID: 2,
      bookingCode: "BK002",
      customerName: "Trần Thị B",
      customerPhone: "0987654321",
      bookingDate: "2024-03-20T00:00:00Z",
      bookingStatus: 1,
      totalPrice: 1200000,
      homeStayID: "HS002",
      isRated: true,
      transactions: [
        {
          transactionID: "TX002",
          transactionCode: "TX002",
          amount: 1200000,
          transactionAmount: 1200000,
          paymentMethod: 1,
          transactionStatus: 1,
          urlPayment: "https://example.com/transaction/TX002",
        },
      ],
      bookingDetails: [
        {
          checkIn: "2024-03-20T13:00:00Z",
          checkOut: "2024-03-22T11:00:00Z",
          guestNumber: 4,
          roomPrice: {
            roomDTO: { roomName: "Phòng Family 202" },
          },
        },
      ],
    },
  ]);

  const [homeStayList] = useState([
    { homeStayID: "HS001", homeStayName: "Homestay Đà Lạt" },
    { homeStayID: "HS002", homeStayName: "Homestay Hội An" },
  ]);

  const [loading] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize] = useState(10);
  const [totalItems] = useState(2);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isBookingDetailsModalOpen, setIsBookingDetailsModalOpen] =
    useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  const [filters, setFilters] = useState({
    bookingCode: "",
    startDate: "",
    endDate: "",
    bookingType: "",
    bookingStatus: "",
    homeStayID: "",
  });

  const bookingStatusMap = {
    0: "Đang chờ xác nhận",
    1: "Đã xác nhận",
    2: "Đã hoàn thành",
    3: "Đã hủy",
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, date) => {
    setFilters((prev) => ({
      ...prev,
      [name]: date ? date.toISOString().split("T")[0] : "",
    }));
  };

  const handleOpenBookingDetailsModal = (booking) => {
    setSelectedBooking(booking);
    setIsBookingDetailsModalOpen(true);
  };

  const handleCloseBookingDetailsModal = () => {
    setIsBookingDetailsModalOpen(false);
    setSelectedBooking(null);
  };

  const handleOpenRatingModal = (booking) => {
    setSelectedBooking(booking);
    setIsRatingModalOpen(true);
  };

  const handleCloseRatingModal = () => {
    setIsRatingModalOpen(false);
    setSelectedBooking(null);
  };

  const handleSubmitRating = async (ratingData) => {
    setBookingHistoryData((prevData) =>
      prevData.map((booking) =>
        booking.bookingCode === ratingData.bookingCode
          ? { ...booking, isRated: true }
          : booking
      )
    );
    setIsRatingModalOpen(false);
  };

  return (
    <div className="mx-auto">
      <section className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FaCalendarAlt className="mr-3 text-blue-500" />
          Lịch sử đặt phòng
        </h2>

        {/* Filter Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Input
            type="text"
            name="bookingCode"
            value={filters.bookingCode}
            onChange={handleFilterChange}
            placeholder="Mã đặt phòng"
          />

          <div className="flex items-center border rounded-xl px-4 py-2">
            <FaCalendarAlt className="mr-2 text-gray-500 h-4 w-4" />
            <DatePicker
              selected={filters.startDate ? new Date(filters.startDate) : null}
              onChange={(date) => handleDateChange("startDate", date)}
              placeholderText="Ngày bắt đầu"
            />
          </div>

          <div className="flex items-center border rounded-xl px-4 py-2">
            <FaCalendarAlt className="mr-2 text-gray-500 h-4 w-4" />
            <DatePicker
              selected={filters.endDate ? new Date(filters.endDate) : null}
              onChange={(date) => handleDateChange("endDate", date)}
              placeholderText="Ngày kết thúc"
            />
          </div>

          <Select
            value={filters.bookingStatus}
            onValueChange={(value) => handleSelectChange("bookingStatus", value)}
          >
            <SelectTrigger className="rounded-xl border">
              <SelectValue placeholder="Trạng thái" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(bookingStatusMap).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.homeStayID}
            onValueChange={(value) => handleSelectChange("homeStayID", value)}
          >
            <SelectTrigger className="rounded-xl border">
              <SelectValue placeholder="Chọn Homestay" />
            </SelectTrigger>
            <SelectContent>
              {homeStayList.map((homeStay) => (
                <SelectItem
                  key={homeStay.homeStayID}
                  value={homeStay.homeStayID}
                >
                  {homeStay.homeStayName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <div className="flex justify-center py-6">
            <Loading />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead>Mã đặt phòng</TableHead>
                  <TableHead>Tên khách hàng</TableHead>
                  <TableHead>Phòng</TableHead>
                  <TableHead>SĐT</TableHead>
                  <TableHead>Ngày đặt</TableHead>
                  <TableHead>Homestay</TableHead>
                  <TableHead>Tổng giá</TableHead>
                  <TableHead>Trạng thái</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookingHistoryData.map((booking) => {
                  const homeStay = homeStayList.find(
                    (h) => h.homeStayID === booking.homeStayID
                  );

                  return (
                    <TableRow
                      key={booking.bookingID}
                      onClick={() => handleOpenBookingDetailsModal(booking)}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <TableCell>{booking.bookingCode}</TableCell>
                      <TableCell>{booking.customerName}</TableCell>
                      <TableCell>
                        {booking.bookingDetails[0]?.roomPrice.roomDTO.roomName}
                      </TableCell>
                      <TableCell>{booking.customerPhone}</TableCell>
                      <TableCell>
                        {new Date(booking.bookingDate).toLocaleDateString("vi-VN")}
                      </TableCell>
                      <TableCell>{homeStay?.homeStayName}</TableCell>
                      <TableCell>
                        {booking.totalPrice.toLocaleString("vi-VN")} VND
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={booking.bookingStatus} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        )}

        <PaginationCustom
          currentPage={pageIndex}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={setPageIndex}
        />
      </section>

      {selectedBooking && (
        <BookingDetailsModal
          isOpen={isBookingDetailsModalOpen}
          closeModal={handleCloseBookingDetailsModal}
          bookingDetails={selectedBooking}
          transactionDetails={selectedBooking.transactions[0]}
        />
      )}

      {selectedBooking && (
        <RatingModal
          isOpen={isRatingModalOpen}
          closeModal={handleCloseRatingModal}
          booking={selectedBooking}
          userID={"user_mock_id"}
          homeStayList={homeStayList}
          submitRating={handleSubmitRating}
        />
      )}
    </div>
  );
};

export default BookingHistory;
