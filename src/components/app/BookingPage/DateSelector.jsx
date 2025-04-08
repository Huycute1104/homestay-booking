import { Label } from "../../ui/label";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import * as React from "react";

export default function DateSelector({
  label,
  value,
  onChange,
  isHourOnly = false,
  className = "",
}) {
  const handleDateChange = (newValue) => {
    onChange(newValue);
  };

  const minDate = dayjs().add(1, "minute");

  return (
    <div className={`mt-5 ${className}`}>
      <Label
        htmlFor={`${label.toLowerCase()}-date`}
        className="block text-[#1c2a38] font-bold text-sm leading-[18px] capitalize mb-3"
      >
        {label}
        <span className="text-red-500">*</span>
      </Label>
      <div className="w-full rounded-3xl">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Chọn ngày và giờ"
            value={value}
            format={isHourOnly ? "DD/MM/YYYY hh A" : "DD/MM/YYYY hh:mm A"}
            onChange={handleDateChange}
            minDateTime={minDate}
            className="w-full justify-start text-left font-normal text-sm leading-5 bg-transparent text-[#495560] focus:outline-none rounded-3xl"
            views={isHourOnly ? ["day", "hours"] : ["day", "hours", "minutes"]}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
