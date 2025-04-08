import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import Footer from "../../components/app/Footer/Footer";
import Header1 from "../../components/app/Header/Header1";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import authService from "../../services/authService";
import { useFormik } from "formik";

const setNewPasswordValidationSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, "Mật khẩu mới phải có ít nhất 6 ký tự")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      "Mật khẩu mới phải chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt."
    )
    .required("Mật khẩu mới là bắt buộc"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Mật khẩu xác nhận không khớp")
    .required("Vui lòng nhập lại mật khẩu."),
});

export default function SetNewPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token")?.replace(/\s/g, "+") || "";
  const email = queryParams.get("email") || "";

  const formik = useFormik({
    initialValues: {
      email,
      token,
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: setNewPasswordValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const { data } = await authService.postResetPassword({
          email,
          token,
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        });
        toast.success(data.message);
        setTimeout(() => navigate("/login"), 3000);
      } catch (err) {
        toast.error("Có lỗi xảy ra khi đặt lại mật khẩu. Vui lòng thử lại.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Header1 />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-[500px] mx-auto mt-8">
          <CardContent className="p-6">
            <Link
              to="/login"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6"
            >
              <IoArrowBackOutline className="mr-2 h-4 w-4" />
              Quay lại trang trước
            </Link>

            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Đặt mật khẩu</h1>
                <p className="text-gray-500 mt-2">
                  Mật khẩu trước đó của bạn đã được đặt lại. Vui lòng đặt mật
                  khẩu mới cho tài khoản của bạn.
                </p>
              </div>

              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Đổi mật khẩu cho tài khoản</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    readOnly
                    className="rounded-3xl border border-[#e0e0e0] p-3 text-sm"
                  />
                </div>

                <input type="hidden" name="token" value={token} />

                <div className="space-y-2">
                  <Label htmlFor="newPassword">Mật khẩu mới</Label>
                  <div className="relative">
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      id="newPassword"
                      name="newPassword"
                      placeholder="Nhập mật khẩu"
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="rounded-3xl border border-[#e0e0e0] p-3 text-sm"
                    />
                    <div
                      className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                      onClick={() => setShowNewPassword((prev) => !prev)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-500" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                  {formik.touched.newPassword && formik.errors.newPassword && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.newPassword}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Nhập lại mật khẩu"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="rounded-3xl border border-[#e0e0e0] p-3 text-sm"
                    />
                    <div
                      className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-500" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.confirmPassword}
                      </p>
                    )}
                </div>

                <Button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="self-end bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] text-white px-5 py-6 rounded-3xl hover:opacity-90 w-full mb-6"
                >
                  Đặt mật khẩu
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
