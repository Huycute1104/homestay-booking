/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/app/Footer/Footer";
import Header1 from "@/components/app/Header/Header1";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import authService from "@/services/authService";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyEmail() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token")?.replace(/\s/g, "+");
  const email = queryParams.get("email");

  useEffect(() => {
    if (!token || !email) {
      setMessage(
        "Không tìm thấy mã xác thực hoặc email. Vui lòng kiểm tra lại đường dẫn xác thực email."
      );
      setIsLoading(false);
    } else {
      formik.submitForm();
    }
  }, [token, email]);

  const formik = useFormik({
    initialValues: {
      email: email || "",
      token: token || "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setIsLoading(true);
        const response = await authService.postVerifyEmail(values);
        setMessage(response.data.message);
        setTimeout(() => navigate("/login"), 3000);
      } catch (error: any) {
        setMessage(error.response?.data?.message || "Xác thực email thất bại");
      } finally {
        setIsLoading(false);
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Helmet>
        <title>Xác nhận email - Hidden Oasis</title>
        <meta name="description" content="Xin chào đến với Hidden Oasis" />
      </Helmet>
      <Header1 />
      <div className="flex-grow flex items-center justify-center px-4 py-6">
        <div className="bg-white shadow-md rounded-2xl p-8 max-w-lg w-full text-center mt-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Xác thực Email
          </h2>

          {isLoading ? (
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              <p className="ml-4 text-gray-500">Đang xác thực...</p>
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit}>
              {message && (
                <p
                  className={`text-lg mb-6 ${
                    message.includes("Không tìm thấy người dùng")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {message}
                </p>
              )}

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Xác thực tài khoản cho
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  readOnly
                  className="rounded-3xl border border-[#e0e0e0] p-3 text-sm"
                />
              </div>

              <input type="hidden" name="token" value={formik.values.token} />

              <div className="mt-6">
                <Button
                  type="submit"
                  className="self-end bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] text-white px-5 py-6 rounded-3xl hover:opacity-90 w-full mb-6"
                  disabled={isLoading}
                >
                  {isLoading ? "Đang xác thực..." : "Xác thực"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VerifyEmail;
