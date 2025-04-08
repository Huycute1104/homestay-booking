import { Calendar, Search, Users } from "lucide-react";

export default function SearchComponent() {
  return (
    <div className="main-container w-[1160px] h-[100px] bg-[rgba(255,255,255,0)] relative overflow-hidden mx-auto my-0">
      <div className="w-[634px] h-[56px] bg-white rounded-[41px] relative shadow-[0_4px_21.2px_0_rgba(0,0,0,0.25)] mt-[20px] ml-[263px] flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="font-['Vollkorn'] text-[20px] font-medium text-black">
            Combo
          </span>
        </div>

        <div className="h-[30px] w-[1px] bg-gray-300" />

        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <span className="font-['Vollkorn'] text-[20px] font-medium text-black">
            Nhận Phòng
          </span>
        </div>

        <div className="h-[30px] w-[1px] bg-gray-300" />

        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <span className="font-['Vollkorn'] text-[20px] font-medium text-black">
            Trả Phòng
          </span>
        </div>

        <div className="h-[30px] w-[1px] bg-gray-300" />

        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-500" />
          <span className="font-['Vollkorn'] text-[20px] font-medium text-black">
            Khách
          </span>
        </div>

        <button className="p-2 bg-blue-300 rounded-full text-white hover:bg-primary/90 transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
