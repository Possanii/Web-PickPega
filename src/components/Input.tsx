import { forwardRef } from "react";
import { cn } from "../app/utils/cn";

interface InputProps {
  /**
   * A string type that you want the component accept.
   */
  type?: "text" | "password" | "email" | "image" | "file";
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
  /**
   * A boolean indicating whether the component is required or not.
   */
  required?: boolean;
  /**
   * A function that get all changes on the component
   */
  onChange?(value: React.ChangeEvent<HTMLInputElement>): void;
}

// Usei o forwardRef para que ele consiga referenciar a qual elemento pai ele pertence

export const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { className, type, required, onChange },
  ref
) {
  return (
    <input
      className={cn(
        "bg-gray-100 h-[35px] rounded-lg px-[10px] text-base leading-none text-black outline-none hover:border-2 focus:border-[3px] hover:border-light-yellow/50 focus:border-light-yellow",
        className
      )}
      type={type}
      onChange={onChange}
      ref={ref}
      required={required}
    />
  );
});
