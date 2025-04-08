import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const SidebarMenu = ({ setActiveTab }) => {
  const UserInfo = () => (
    <div className="text-center mb-5">
      <img
        src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/7950bdf1-19dd-4f2d-b5d8-f90a4cb79061.png"
        alt="User"
        className="w-[103px] h-[103px] rounded-full mx-auto"
      />
    </div>
  );

  const MenuItem = ({ icon, title, dropdownItems }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };

    return (
      <li className="mb-5">
        <button
          onClick={dropdownItems ? toggleDropdown : undefined}
          className="flex items-center w-full text-left font-bold text-[14px]"
        >
          <img src={icon} alt={`${title} icon`} className="w-6 h-6 mr-3" />
          {title}
          {dropdownItems && (
            <span className="ml-auto">
              {isDropdownOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </span>
          )}
        </button>
        {isDropdownOpen && dropdownItems && (
          <ul className="pl-10 mt-2">
            {dropdownItems.map((item, index) => (
              <li key={index} className="mb-2 text-sm text-gray-700">
                <button
                  className="hover:text-blue-500"
                  onClick={() => setActiveTab(item.internalName)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside className="w-[275px] bg-white rounded-[60px] shadow-md p-5">
      <UserInfo />
      <nav>
        <ul className="list-none p-0">
          <MenuItem
            icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/89bb44be-2d85-4bd3-a3a5-2f105f568d4a.png"
            title="Thông tin tài khoản"
            dropdownItems={[
              { name: "Hồ sơ", internalName: "profile" },
              { name: "Thay đổi mật khẩu", internalName: "changePassword" },
            ]}
          />
          <MenuItem
            icon="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2024-12-21/8f2eb0f6-8fd1-4265-b182-05172e015023.png"
            title="Phòng đã đặt"
            dropdownItems={[
              { name: "Danh sách phòng", internalName: "bookingHistory" },
            ]}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarMenu;
