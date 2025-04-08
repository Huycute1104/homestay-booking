import BookingHistory from "@/pages/UserProfile/components/BookingHistory";
import ProfileSection from "@/pages/UserProfile/components/ProfileSection";
import UpdatePassword from "@/pages/UserProfile/components/UpdatePassword";
import { motion } from "framer-motion";
import { ChevronRight, Clock, Lock, User } from "lucide-react";

const menuItems = [
  { id: "profile", label: "Hồ sơ", icon: User, color: "text-blue-600" },
  {
    id: "bookingHistory",
    label: "Lịch sử đặt phòng",
    icon: Clock,
    color: "text-green-600",
  },
  {
    id: "changePassword",
    label: "Thay đổi mật khẩu",
    icon: Lock,
    color: "text-purple-600",
  },
];

const LayoutSidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-80 bg-white rounded-2xl shadow-lg p-6"
        >
          <h2 className="text-xl font-bold mb-6 text-gray-800">Menu</h2>
          <nav className="space-y-2">
            {menuItems.map(({ id, label, icon: Icon, color }) => (
              <motion.button
                key={id}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  activeTab === id
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      activeTab === id ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    activeTab === id ? "rotate-90" : ""
                  }`}
                />
              </motion.button>
            ))}
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1"
        >
          {activeTab === "profile" && <ProfileSection />}
          {activeTab === "bookingHistory" && <BookingHistory />}
          {activeTab === "changePassword" && <UpdatePassword />}
        </motion.div>
      </div>
    </div>
  );
};

export default LayoutSidebar;
