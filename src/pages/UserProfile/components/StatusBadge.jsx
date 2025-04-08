import { CheckCircle, CircleCheck, Clock, XCircle } from "lucide-react";

export const StatusBadge = ({ status }) => {
  const statusConfig = {
    0: { label: "Đang chờ xác nhận", icon: Clock, color: "text-blue-500" },
    1: { label: "Đã xác nhận", icon: CircleCheck, color: "text-green-500" },
    2: { label: "Đã hoàn thành", icon: CheckCircle, color: "text-green-500" },
    3: { label: "Đã hủy", icon: XCircle, color: "text-red-500" },
  };

  const { label, icon: Icon, color } = statusConfig[status] || {};

  if (!Icon) return null;

  return (
    <span className={`flex items-center ${color}`}>
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </span>
  );
};
