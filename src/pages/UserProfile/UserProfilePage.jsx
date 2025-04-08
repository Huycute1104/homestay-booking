import Header1 from "../../components/app/Header/Header1";
import LayoutSidebar from "../../components/app/LayoutSidebar";
import { motion } from "framer-motion";
import { useState } from "react";

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <Header1 activeTab={activeTab} setActiveTab={setActiveTab} />
      <LayoutSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
    </motion.div>
  );
};

export default UserProfilePage;
