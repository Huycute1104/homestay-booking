/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComboSelector from "./ComboSelector";
import CustomBookingForm from "./CustomBookingForm";
import DateSelector from "./DateSelector";
import GuestSelector from "./GuestSelector";

export default function BookingForm({ combos, maxGuest, homeStayID, data }) {
  const { roomID } = useParams();
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("accessToken");
  const decodedToken = token ? jwtDecode(token) : null;
  const userId = decodedToken?.id;
  const navigate = useNavigate();

  const handleComboSelect = (combo) => {
    setSelectedCombo(combo);
  };

  useEffect(() => {
    if (selectedCombo && fromDate) {
      const checkInTime = transformToCheckInTimev2(fromDate);
      const checkoutTime = dayjs(checkInTime).add(
        selectedCombo.comboDTO.hourRange,
        "hour"
      );
      setCheckoutDate(checkoutTime);
    }
  }, [selectedCombo, fromDate]);

  const validateForm = () => {
    const phonePattern = /^(03|05|07|08|09)[0-9]{8}$/;
    if (!customerPhone || !phonePattern.test(customerPhone)) {
      toast.error(
        "Số điện thoại không hợp lệ. Phải bắt đầu bằng 03, 05, 07, 08, hoặc 09 và có đủ 10 chữ số."
      );
      return false;
    }
    if (!customerName || !selectedCombo || !fromDate) {
      toast.error("Vui lòng điền đầy đủ thông tin.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      navigate("/login");
      toast.warning("Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.");
      return;
    }

    if (!validateForm()) return;

    setLoading(true);

    // Đây là chỗ xử lý gửi dữ liệu lên server (đã được bỏ đi)
    setTimeout(() => {
      toast.success("Đặt phòng thành công (giả lập)!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto bg-transparent px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-300 overflow-hidden">
        <Tabs defaultValue="booking">
          <TabsList className="flex justify-center items-center mt-10">
            <TabsTrigger
              value="booking"
              className="text-xl border-none font-semibold text-gray-800 focus:outline-none transition-all duration-200 hover:text-blue-600"
            >
              Đặt Phòng
            </TabsTrigger>
            <TabsTrigger
              value="custom"
              className="text-xl font-semibold text-gray-800 focus:outline-none transition-all duration-200 hover:text-blue-600"
            >
              Custom
            </TabsTrigger>
          </TabsList>
          <TabsContent value="booking">
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
              <ComboSelector combos={combos} onComboSelect={handleComboSelect} />
              <DateSelector
                label="Ngày nhận phòng"
                value={fromDate}
                onChange={setFromDate}
              />
              <div className="mt-7">
                <Label className="block font-semibold text-sm mb-4">
                  Giờ trả phòng
                </Label>
                <Input
                  readOnly
                  value={
                    checkoutDate
                      ? checkoutDate.format("DD/MM/YYYY hh:mm A")
                      : ""
                  }
                />
              </div>
              <GuestSelector
                maxGuest={maxGuest}
                value={guests}
                onChange={setGuests}
              />
              <div>
                <Label className="block font-semibold text-sm mb-2">
                  Tên người đặt phòng<span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Tên người đặt phòng"
                />
              </div>
              <div>
                <Label className="block font-semibold text-sm mb-2">
                  Số điện thoại <span className="text-red-500">*</span>
                </Label>
                <Input
                  type="text"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Số điện thoại"
                />
              </div>
              <div>
                <Label className="block font-semibold text-sm mb-2">
                  Tổng tiền
                </Label>
                <Input
                  readOnly
                  value={totalPrice > 0 ? formatVND(totalPrice) : ""}
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] text-white px-6 py-4 rounded-3xl hover:opacity-90"
              >
                {loading ? "Đang xử lý..." : "Xác nhận đặt phòng"}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="custom">
            <CustomBookingForm homeStayID={homeStayID} roomName={data.roomName} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
