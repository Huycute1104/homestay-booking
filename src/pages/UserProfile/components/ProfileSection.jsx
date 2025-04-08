import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Skeleton } from "../../../components/ui/skeleton";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const FormGroup = ({ label, type, id, value, placeholder, children, onChange }) => (
  <motion.div
    className="flex flex-col"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <Label htmlFor={id} className="mb-2 font-bold">
      {label}
    </Label>
    {children || (
      <Input
        className="rounded-2xl"
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    )}
  </motion.div>
);

const ProfileSection = () => {
  const [userData, setUserData] = useState({
    name: "Nguyễn Văn A",
    email: "vana@example.com",
    phoneNumber: "0123456789",
    avatar: "https://i.pravatar.cc/150?img=3",
  });
  const [editableName, setEditableName] = useState(userData.name);
  const [editablePhoneNumber, setEditablePhoneNumber] = useState(userData.phoneNumber);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState(null);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
  const [loading, setLoading] = useState(false); // No loading from API now

  const handleSave = () => {
    setIsSavingProfile(true);

    const phoneNumberPattern = /^0\d{9}$/;
    if (!phoneNumberPattern.test(editablePhoneNumber)) {
      alert("Số điện thoại không hợp lệ. Vui lòng nhập lại.");
      setIsSavingProfile(false);
      return;
    }

    setTimeout(() => {
      setUserData((prev) => ({
        ...prev,
        name: editableName,
        phoneNumber: editablePhoneNumber,
        avatar: avatarPreviewUrl || prev.avatar,
      }));
      setAvatarFile(null);
      setAvatarPreviewUrl(null);
      alert("Cập nhật thành công!");
      setIsSavingProfile(false);
    }, 1000);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const maxSizeInMB = 1;
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
      if (file.size > maxSizeInBytes) {
        alert(`Kích thước file phải nhỏ hơn ${maxSizeInMB}MB.`);
        return;
      }
      setIsUploadingAvatar(true);
      setAvatarFile(file);
      setAvatarPreviewUrl(URL.createObjectURL(file));
      setTimeout(() => setIsUploadingAvatar(false), 1000);
    }
  };

  const fields = [
    {
      label: "Tên",
      type: "text",
      id: "firstName",
      value: editableName,
      placeholder: "Tên",
      onChange: (e) => setEditableName(e.target.value),
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      value: userData.email,
      placeholder: "Email",
    },
    {
      label: "Số điện thoại",
      type: "number",
      id: "phone",
      value: editablePhoneNumber,
      placeholder: "Số điện thoại",
      onChange: (e) => setEditablePhoneNumber(e.target.value),
    },
  ];

  return (
    <motion.section
      className="flex-1 p-5 bg-white rounded-xl shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {loading ? (
        <div className="space-y-5">
          <Skeleton className="w-20 h-20 rounded-full mx-auto" />
          <Skeleton className="h-6 w-32 mx-auto" />
          <Skeleton className="h-8 w-full mx-auto" />
          <Skeleton className="h-8 w-full mx-auto" />
        </div>
      ) : (
        <>
          <div className="flex items-center mb-5">
            <div className="w-20 h-20 rounded-full overflow-hidden mr-5">
              <motion.img
                src={avatarPreviewUrl || userData.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] text-white px-5 py-3 rounded-3xl hover:opacity-90"
              onClick={() => document.getElementById("avatarUpload")?.click()}
            >
              <motion.div
                initial={{ rotate: -15 }}
                animate={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCamera />
              </motion.div>
              Đổi ảnh đại diện
            </Button>
            <input
              type="file"
              id="avatarUpload"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>
          <form className="flex flex-col gap-5">
            {fields.map(({ label, type, id, value, placeholder, onChange }) => (
              <FormGroup
                key={id}
                label={label}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
              />
            ))}
            <Button
              type="button"
              onClick={handleSave}
              className="self-end bg-gradient-to-r from-[#AED1FF] to-[#2CB0ED] text-white px-6 py-3 rounded-3xl hover:opacity-90"
              disabled={isSavingProfile}
            >
              {isSavingProfile ? "Đang lưu..." : "Lưu thông tin"}
            </Button>
          </form>
        </>
      )}
    </motion.section>
  );
};

export default ProfileSection;
