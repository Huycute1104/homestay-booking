import { Button } from "../../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../../ui/command";
import { Label } from "../../ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import React, { useState } from "react";

const ComboSelector = ({ combos, onComboSelect }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = (combo) => {
    setValue(combo.comboDTO.comboID);
    onComboSelect(combo);
    setOpen(false);
  };

  return (
    <div className="mt-10">
      <Label
        htmlFor="combo"
        className="block text-[#1c2a38] font-bold text-sm leading-[18px] capitalize mb-4"
      >
        Combo<span className="text-red-500">*</span>
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between border-[1px] text-[#495560] border-gray-300 rounded-xl px-5 py-6"
          >
            {value
              ? combos.find((combo) => combo.comboDTO.comboID === value)
                  ?.comboDTO.comboName
              : "Chọn combo..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 mt-2">
          <Command>
            <CommandList>
              <CommandEmpty>No combo found.</CommandEmpty>
              <CommandGroup>
                {combos.map((combo) => (
                  <CommandItem
                    key={combo.comboDTO.comboID}
                    onSelect={() => handleSelect(combo)}
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        value === combo.comboDTO.comboID
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                    {combo.comboDTO.comboName}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ComboSelector;
