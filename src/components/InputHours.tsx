import { cn } from "../app/utils/cn";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import { NumericFormat } from "react-number-format";

interface InputHoursProps {
  error?: string;
  value?: number;
  onChange?(value: string): void;
  className?: string;
  placeholder?: string;
}

export function InputHours({
  className,
  placeholder,
  error,
  value,
  onChange,
}: InputHoursProps) {
  return (
    <div className="relative">
      <NumericFormat
        decimalScale={2}
        decimalSeparator=":"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className={cn(
          "bg-gray-100 w-full h-[52px] rounded-lg px-3 hover:px-2.5 focus:px-[9px] pt-4 placeholder-shown:pt-0 text-base leading-none text-black outline-none border hover:border-2 focus:border-[3px] hover:border-light-yellow/50 focus:border-light-yellow peer",
          error && "!border-red-900",
          className
        )}
        placeholder=" "
      />

      <label className="absolute text-xs left-3 top-1.5 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all">
        {placeholder}
      </label>

      {error && (
        <div className="flex gap-2 items-center mt-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      )}
    </div>
  );
}

InputHours.displayName = "InputHours";
