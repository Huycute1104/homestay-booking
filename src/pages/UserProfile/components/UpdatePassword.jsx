import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { Eye, EyeOff, Key, Lock, Shield } from "lucide-react";
import { useState } from "react";
import * as Yup from "yup";

const FormField = ({
  icon: Icon,
  label,
  error,
  showPassword,
  onTogglePassword,
  children,
}) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="space-y-2"
  >
    <Label className="text-sm font-medium text-gray-700">{label}</Label>
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <Icon className="w-5 h-5 text-gray-400" />
      </div>
      {children}
      {onTogglePassword && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-sm text-red-500"
      >
        {error}
      </motion.p>
    )}
  </motion.div>
);

const UpdatePassword = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Mật khẩu hiện tại là bắt buộc"),
    newPassword: Yup.string()
      .min(6, "Mật khẩu mới phải có ít nhất 6 ký tự")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        "Mật khẩu mới phải chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt."
      )
      .required("Mật khẩu mới là bắt buộc"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Mật khẩu xác nhận không khớp")
      .required("Xác nhận mật khẩu là bắt buộc"),
  });

  const handleSubmit = (values) => {
    setIsSaving(true);
    console.log("Submitted values:", values);
    setTimeout(() => {
      alert("Form đã gửi thành công (không gọi API)");
      setIsSaving(false);
    }, 1000);
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6">Cập nhật mật khẩu</h2>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form className="space-y-6">
            <FormField
              icon={Key}
              label="Mật khẩu hiện tại"
              error={touched.currentPassword && errors.currentPassword}
              showPassword={showPasswords.current}
              onTogglePassword={() => togglePasswordVisibility("current")}
            >
              <Input
                name="currentPassword"
                type={showPasswords.current ? "text" : "password"}
                value={values.currentPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập mật khẩu hiện tại"
              />
            </FormField>

            <FormField
              icon={Lock}
              label="Mật khẩu mới"
              error={touched.newPassword && errors.newPassword}
              showPassword={showPasswords.new}
              onTogglePassword={() => togglePasswordVisibility("new")}
            >
              <Input
                name="newPassword"
                type={showPasswords.new ? "text" : "password"}
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập mật khẩu mới"
              />
            </FormField>

            <FormField
              icon={Shield}
              label="Xác nhận mật khẩu mới"
              error={touched.confirmPassword && errors.confirmPassword}
              showPassword={showPasswords.confirm}
              onTogglePassword={() => togglePasswordVisibility("confirm")}
            >
              <Input
                name="confirmPassword"
                type={showPasswords.confirm ? "text" : "password"}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="pl-10 pr-10 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập lại mật khẩu mới"
              />
            </FormField>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-end"
            >
              <Button
                type="submit"
                className="w-1/2 justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                disabled={isSaving}
              >
                {isSaving ? (
                  <motion.span
                    animate={{ opacity: [0.5, 1] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    Đang lưu...
                  </motion.span>
                ) : (
                  "Lưu mật khẩu"
                )}
              </Button>
            </motion.div>
          </Form>
        )}
      </Formik>
    </motion.section>
  );
};

export default UpdatePassword;
