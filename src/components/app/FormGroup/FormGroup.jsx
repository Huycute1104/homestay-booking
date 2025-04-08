import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const FormGroup = ({ label, id, placeholder, type, children }) => (
  <div className="relative flex flex-col mb-5">
    <Label htmlFor={id} className="text-[#222222] text-[16px] font-bold mb-2">
      {label}
    </Label>
    <div className="relative">
      <Input
        className="w-full h-[44px] bg-transparent border border-[#e0e0e0] rounded-2xl pl-4 pr-10 text-[#000000] text-[14px] font-normal"
        type={type}
        id={id}
        placeholder={placeholder}
      />
      {children}
    </div>
  </div>
);
