import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export default function GuestSelector({ maxGuest, value, onChange }) {
  const handleGuestChange = (event) => {
    const newValue = Math.min(Number(event.target.value), maxGuest);
    onChange(newValue);
  };

  return (
    <div className="mt-7">
      <Label
        htmlFor="guest-count"
        className="block text-[#1c2a38] font-semibold text-sm leading-5 mb-4"
      >
        Số lượng khách (Max: {maxGuest})<span className="text-red-500">*</span>
      </Label>
      <Input
        id="guest-count"
        type="number"
        min="1"
        max={maxGuest}
        value={value}
        onChange={handleGuestChange}
        placeholder="2"
        className="w-full px-5 py-6 rounded-xl bg-transparent text-[#495560] font-semibold text-sm leading-5 focus:outline-none"
      />
    </div>
  );
}
