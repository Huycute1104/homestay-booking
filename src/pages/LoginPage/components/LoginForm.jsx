import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FormGroup = ({ label, type, id, placeholder, children }) => (
  <div className="flex flex-col">
    <Label htmlFor={id} className="mb-2 text-sm font-semibold text-[#222222]">
      {label}
    </Label>
    {children || (
      <Input
        className="rounded-3xl border border-[#e0e0e0] p-3 text-sm"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    )}
  </div>
);

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
      password: Yup.string().required("Mật khẩu là bắt buộc"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      setErrorMessage("");

      try {
        // Bỏ gọi API ở đây
        console.log("Submitted values:", values);
        toast.success("Đăng nhập thành công (giả lập)");
        navigate("/");
      } catch (error) {
        setErrorMessage("Đăng nhập thất bại. Vui lòng thử lại!");
      } finally {
        setIsLoading(false);
      }
    },
  })

  const fields = [
    {
      label: "Địa chỉ email",
      type: "email",
      id: "email",
      placeholder: "Email",
      value: formik.values.email,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    },
    {
      label: "Mật khẩu",
      type: showPassword ? "text" : "password",
      id: "password",
      placeholder: "Mật khẩu",
      value: formik.values.password,
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      togglePasswordVisibility: () => setShowPassword((prev) => !prev),
    },
  ];

  return (
    <section className="flex-1 p-6 sm:p-8 md:p-10 bg-white rounded-3xl shadow-md w-full max-w-[439px] mx-auto mt-16 sm:mt-6 md:mt-10 border-t">
      <h2 className="text-xl font-semibold mb-6 text-center">Đăng nhập</h2>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {fields.map(
          ({
            label,
            type,
            id,
            placeholder,
            value,
            onChange,
            onBlur,
            togglePasswordVisibility,
          }) => (
            <FormGroup
              key={id}
              label={label}
              type={type}
              id={id}
              placeholder={placeholder}
            >
              <div className="relative">
                <Input
                  className="rounded-3xl border border-[#e0e0e0] p-3 text-sm"
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
                {id === "password" && (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                )}
              </div>
            </FormGroup>
          )
        )}
        <Button
          type="submit"
          className="self-end bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] text-white px-6 py-6 rounded-3xl hover:opacity-90 w-full"
          disabled={isLoading}
        >
          {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>
        {errorMessage && (
          <div className="text-red-600 text-xs mt-2 text-center">
            {errorMessage}
          </div>
        )}
      </form>

      <p className="text-center mt-4">
        <Link to="/forgotpassword" className="text-[#02aab0] font-semibold">
          Quên mật khẩu?
        </Link>
      </p>
      <p className="text-center mt-3 text-sm">
        Bạn chưa có tài khoản?{" "}
        <Link to="/register" className="text-[#02aab0] font-semibold">
          Đăng ký
        </Link>
      </p>

      <button
        className="w-full h-[50px] bg-white border border-[#e0e0e0] text-black rounded-3xl flex items-center justify-center mt-10 sm:mt-8"
      >
        <img
          src="https://itviec.com/assets/google_logo-af373a5e64715e7d4fcdea711f96995f7fd7a49725b3dd8910d4749b74742cb2.svg"
          alt="Google Logo"
          className="w-6 h-6 mr-3"
        />
        Đăng nhập với Google
      </button>
    </section>
  );
};

export default LoginForm;
