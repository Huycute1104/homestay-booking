import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Label } from "../../../components/ui/label";
import {
  Calendar,
  Clock,
  CreditCard,
  Home,
  Receipt,
  Users,
  Wallet,
} from "lucide-react";
import React from "react";

const BookingDetailsModal = ({
  isOpen,
  closeModal,
  bookingDetails,
  transactionDetails,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-full sm:max-w-[500px] sm:px-6 px-4 mx-auto sm:mx-0 rounded-xl w-[93%]">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl">
            Chi tiết đặt phòng và giao dịch
          </DialogTitle>
          <DialogDescription>
            Dưới đây là các thông tin chi tiết về đặt phòng và giao dịch.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 py-4 space-y-6">
          <div className="space-y-4">
            <Label className="font-semibold text-lg flex items-center gap-2">
              <Receipt className="w-5 h-5" />
              Thông tin giao dịch
            </Label>
            <div className="grid gap-3 text-sm">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Mã giao dịch:</Label>
                <span className="font-medium">
                  {transactionDetails.transactionCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Số tiền:</Label>
                <span className="font-medium">
                  {transactionDetails.transactionAmount.toLocaleString("vi-VN")} VND
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Phương thức thanh toán:</Label>
                <span className="font-medium">
                  {transactionDetails.paymentMethod === 0 ? "Thẻ" : "Tiền mặt"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Trạng thái:</Label>
                <span
                  className={`font-medium ${
                    transactionDetails.transactionStatus === 1
                      ? "text-green-600"
                      : transactionDetails.transactionStatus === 0
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {transactionDetails.transactionStatus === 1
                    ? "Hoàn tất"
                    : transactionDetails.transactionStatus === 0
                    ? "Đang xử lý"
                    : "Đã hủy"}
                </span>
              </div>
            </div>
            <a
              href={transactionDetails.urlPayment}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm inline-flex items-center gap-1"
            >
              <Receipt className="w-4 h-4" />
              Xem chi tiết giao dịch
            </a>
          </div>

          <div className="space-y-4">
            <Label className="font-semibold text-lg flex items-center gap-2">
              <Home className="w-5 h-5" />
              Chi tiết đặt phòng
            </Label>
            <div className="grid gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Mã đặt phòng:</Label>
                <span className="font-medium">
                  {bookingDetails.bookingCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Khách hàng:</Label>
                <span className="font-medium">
                  {bookingDetails.customerName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Phòng:</Label>
                <span className="font-medium">
                  {bookingDetails.bookingDetails[0]?.roomPrice.roomDTO.roomName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Số khách:</Label>
                <span className="font-medium">
                  {bookingDetails.bookingDetails[0]?.guestNumber}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Ngày nhận phòng:</Label>
                <span className="font-medium">
                  {new Date(
                    bookingDetails.bookingDetails[0]?.checkIn
                  ).toLocaleString("vi-VN")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Ngày trả phòng:</Label>
                <span className="font-medium">
                  {new Date(
                    bookingDetails.bookingDetails[0]?.checkOut
                  ).toLocaleString("vi-VN")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet className="w-4 h-4 text-muted-foreground" />
                <Label className="text-muted-foreground">Tổng giá:</Label>
                <span className="font-medium">
                  {bookingDetails.totalPrice.toLocaleString("vi-VN")} VND
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDetailsModal;
