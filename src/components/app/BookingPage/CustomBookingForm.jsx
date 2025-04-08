// Đã bỏ import submitCustomBookingRequest và transformToCheckInTimev3

import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import DateSelector from "./DateSelector";

const validationSchema = Yup.object({
  customerName: Yup.string().required(
    "Tên người đặt phòng không được để trống."
  ),
  customerPhone: Yup.string()
    .matches(
      /^(03|05|07|08|09)[0-9]{8}$/,
      "Số điện thoại không hợp lệ. Phải bắt đầu bằng 03, 05, 07, 08, hoặc 09 và có đủ 10 chữ số."
    )
    .required("Số điện thoại không được để trống."),
  dateBooking: Yup.date().required("Ngày đặt phòng không được để trống."),
  checkOut: Yup.date()
    .min(Yup.ref("dateBooking"), "Ngày trả phòng phải sau ngày đặt phòng")
    .required("Ngày trả phòng không được để trống."),
});

const CustomBookingForm = ({ homeStayID, roomName }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
      toast.warning("Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.");
      return;
    }

    const { customerName, customerPhone, dateBooking, checkOut } = values;

    // Xử lý dữ liệu ở đây nếu cần (đã loại bỏ transformToCheckInTimev3 và submitCustomBookingRequest)

    try {
      // Gọi API submit booking ở đây (nếu cần)
      console.log("Payload:", {
        name: customerName,
        phone: customerPhone,
        roomName: roomName,
        checkIn: dateBooking,
        checkOut: checkOut,
        homeStayID,
      });

      toast.success("Đặt phòng thành công (demo).");
      resetForm();
    } catch (error) {
      toast.error("Đã xảy ra lỗi khi đặt phòng.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        customerName: "",
        customerPhone: "",
        dateBooking: null,
        checkOut: null,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        isSubmitting,
        errors,
        touched,
      }) => (
        <Form className="p-4 sm:p-6 space-y-6">
          <div>
            <Label className="block text-[#1c2a38] font-semibold text-sm leading-5 mb-4">
              Tên phòng
            </Label>
            <Input
              type="text"
              value={roomName}
              readOnly
              className="w-full px-5 py-6 bg-transparent text-[#495560] font-semibold text-sm leading-5 focus:outline-none rounded-xl"
            />
          </div>

          <div>
            <Label className="block text-[#1c2a38] font-semibold text-sm leading-5 mb-4">
              Tên người đặt phòng
            </Label>
            <Input
              type="text"
              name="customerName"
              value={values.customerName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tên người đặt phòng"
              className="w-full px-5 py-6 bg-transparent text-[#495560] font-semibold text-sm leading-5 focus:outline-none rounded-xl"
            />
            {touched.customerName && errors.customerName && (
              <div className="text-red-500 text-sm">{errors.customerName}</div>
            )}
          </div>

          <div>
            <Label className="block text-[#1c2a38] font-semibold text-sm leading-5 mb-4">
              Số điện thoại
            </Label>
            <Input
              type="text"
              name="customerPhone"
              value={values.customerPhone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Số điện thoại"
              className="w-full px-5 py-6 bg-transparent text-[#495560] font-semibold text-sm leading-5 focus:outline-none rounded-xl"
            />
            {touched.customerPhone && errors.customerPhone && (
              <div className="text-red-500 text-sm">{errors.customerPhone}</div>
            )}
          </div>

          <DateSelector
            label="Ngày đặt phòng"
            value={values.dateBooking}
            onChange={(date) =>
              handleChange({ target: { name: "dateBooking", value: date } })
            }
            isHourOnly={true}
          />
          {touched.dateBooking && errors.dateBooking && (
            <div className="text-red-500 text-sm">{errors.dateBooking}</div>
          )}

          <DateSelector
            label="Ngày trả phòng"
            value={values.checkOut}
            onChange={(date) =>
              handleChange({ target: { name: "checkOut", value: date } })
            }
            isHourOnly={true}
          />
          {touched.checkOut && errors.checkOut && (
            <div className="text-red-500 text-sm">{errors.checkOut}</div>
          )}

          <div className="mt-7">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="self-end bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] text-white px-6 py-6 rounded-3xl hover:opacity-90 w-full"
            >
              {isSubmitting ? <span>Đang xử lý...</span> : "Xác nhận đặt phòng"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CustomBookingForm;
