import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const FormGroup = ({
  label,
  type,
  id,
  placeholder,
  children,
  required,
  minLength,
}) => (
  <div className="flex flex-col mb-5">
    <Label htmlFor={id} className="mb-2 font-bold text-[16px] text-[#222222]">
      {label}
    </Label>
    {children || (
      <Input
        className="w-full h-[44px] px-4 rounded-2xl border border-gray-300 text-[14px] font-lato"
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
      />
    )}
    <ErrorMessage
      name={id}
      component="div"
      className="text-red-600 text-sm mt-2"
    />
  </div>
);

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Địa chỉ email không hợp lệ")
      .required("Email là bắt buộc"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Số điện thoại phải gồm 10 chữ số")
      .required("Số điện thoại là bắt buộc"),
    firstName: Yup.string().required("Tên là bắt buộc"),
    lastName: Yup.string().required("Họ và tên đệm là bắt buộc"),
    password: Yup.string()
      .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
      .required("Mật khẩu là bắt buộc"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không khớp")
      .required("Xác nhận mật khẩu là bắt buộc"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await authService.signup({
        name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
        confirmPassword: values.confirmPassword,
      });

      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Đăng ký thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full border-t max-w-[420px] bg-white rounded-[50px] shadow-md p-[30px] sm:p-[40px] md:p-[45px]">
      <h2 className="font-lato text-[20px] font-extrabold text-[#222222] mb-[30px] text-center">
        Đăng ký thành viên
      </h2>
      <Formik
        initialValues={{
          email: "",
          phoneNumber: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <FormGroup label="Địa chỉ email" type="email" id="email" required>
              <Field
                className="w-full h-[44px] px-4 rounded-2xl border border-gray-300 text-[14px] font-lato"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </FormGroup>

            <FormGroup label="Số điện thoại" id="phoneNumber" required>
              <div className="flex gap-2">
                <div className="flex items-center w-[112px] h-[44px] bg-gray-100 rounded-2xl border border-gray-300 px-4">
                  <div
                    className="w-[26px] h-[26px] bg-cover bg-no-repeat"
                    style={{
                      backgroundImage:
                        "url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/3a10e934-2484-4656-a14d-4ddac412ac89.png')",
                    }}
                  />
                  <span>+84</span>
                  <div
                    className="w-[18px] h-[18px] bg-cover bg-no-repeat ml-auto"
                    style={{
                      backgroundImage:
                        "url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/5a72d9cb-b864-4f7e-b29f-7764ff47376e.png')",
                    }}
                  />
                </div>
                <Field
                  className="w-full h-[44px] px-4 rounded-2xl border border-gray-300 text-[14px] font-lato"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Số điện thoại"
                />
              </div>
            </FormGroup>

            <FormGroup label="Tên" type="text" id="firstName" required>
              <Field
                className="w-full h-[44px] px-4 rounded-2xl border border-gray-300 text-[14px] font-lato"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Tên"
              />
            </FormGroup>

            <FormGroup label="Họ và tên đệm" type="text" id="lastName" required>
              <Field
                className="w-full h-[44px] px-4 rounded-2xl border border-gray-300 text-[14px] font-lato"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Họ và tên đệm"
              />
            </FormGroup>

            <FormGroup
              label="Mật khẩu (Tối thiểu 6 ký tự)"
              type="password"
              id="password"
              required
              minLength={6}
            >
              <div className="relative">
                <Field
                  className="w-full h-[44px] px-4 rounded-2xl border border-gray-300 text-[14px] font-lato"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Mật khẩu"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </FormGroup>

            <FormGroup
              label="Xác nhận mật khẩu"
              type="password"
              id="confirmPassword"
              required
              minLength={6}
            >
              <div className="relative">
                <Field
                  className="w-full h-[44px] px-4 rounded-2xl border border-gray-300 text-[14px] font-lato"
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Xác nhận mật khẩu"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </FormGroup>

            <Button
              type="submit"
              className="w-full h-[46px] bg-cover bg-no-repeat rounded-[50px] text-white font-lato text-[16px] font-bold mt-7"
              style={{
                backgroundImage:
                  "url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/d09f38ad-2c0a-4465-9f79-28dc2b0e4500.png')",
              }}
              disabled={loading}
            >
              {loading ? "Đang đăng ký..." : "Đăng ký"}
            </Button>
          </Form>
        )}
      </Formik>

      <p className="font-lato text-[14px] text-center mt-5">
        Bạn đã có tài khoản?{" "}
        <a href="/login" className="text-[#02aab0] font-bold no-underline">
          Nhấn vào đây
        </a>
      </p>
    </section>
  );
};

export default SignUpForm;
