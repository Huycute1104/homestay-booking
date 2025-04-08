import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email để khôi phục mật khẩu."),
});

const ForgotPasswordForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setError(null);
      setSuccess(null);
      setTimeout(() => {
        const successMessage =
          "Email khôi phục mật khẩu đã được gửi! Vui lòng kiểm tra hộp thư đến của bạn.";
        setSuccess(successMessage);
        toast.success(successMessage);
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <form
      className="w-full max-w-[439px] bg-white rounded-2xl border-t shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-6 md:p-8 z-10"
      onSubmit={formik.handleSubmit}
    >
      <h2 className="font-lato text-xl md:text-[20px] font-extrabold leading-tight text-[#222222] mb-4 md:mb-[35px]">
        Quên mật khẩu
      </h2>
      <p className="font-lato text-sm md:text-[14px] font-bold leading-tight text-[#222222] mb-6 md:mb-[33px]">
        Chúng tôi sẽ gửi mật khẩu mới tới email của bạn
      </p>

      <div className="relative mb-6 md:mb-[35px]">
        <label htmlFor="email" className="sr-only">
          Địa chỉ email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          className="rounded-3xl border border-[#e0e0e0] p-3 text-sm"
          placeholder="Địa chỉ email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-xs mt-2">{formik.errors.email}</div>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-center text-sm mb-4">{error}</p>
      )}
      {success && (
        <p className="text-green-500 text-center text-sm mb-4">{success}</p>
      )}

      <Button
        type="submit"
        className="self-end bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] text-white px-5 py-6 rounded-3xl hover:opacity-90 w-full mb-6"
        disabled={formik.isSubmitting}
      >
        Gửi
      </Button>

      <p className="font-lato text-sm md:text-[14px] leading-tight text-center mb-3 md:mb-[12px]">
        Đã có tài khoản?{" "}
        <Link to="/login" className="font-bold text-[#02aab0] no-underline">
          Đăng nhập
        </Link>
      </p>
      <div className="relative text-center my-4 md:my-[19px] mb-6 md:mb-[27px]">
        <hr className="border-t border-gray-200" />
        <span className="bg-white px-4 font-lato text-sm md:text-[14px] font-medium text-[#222222] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Hoặc
        </span>
      </div>
      <p className="font-lato text-sm md:text-[14px] leading-tight text-center mb-3 md:mb-[12px]">
        Bạn chưa có tài khoản?{" "}
        <Link to="/register" className="font-bold text-[#02aab0] no-underline">
          Đăng ký
        </Link>
      </p>
    </form>
  );
};

export default ForgotPasswordForm;
