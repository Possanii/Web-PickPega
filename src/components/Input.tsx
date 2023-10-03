import { ComponentProps, forwardRef } from "react";
import { cn } from "../app/utils/cn";
import { CrossCircledIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
  search?: boolean;
  onSearchClick?(): void;
}

// Usei o forwardRef para que ele consiga referenciar a qual elemento pai ele pertence

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, placeholder, name, id, error, search, onSearchClick, ...rest },
    ref
  ) => {
    const inputId = id ?? name;
    return (
      <div className="relative">
        <input
          {...rest}
          id={inputId}
          name={name}
          ref={ref}
          className={cn(
            "bg-gray-100 w-full h-[52px] rounded-lg px-3 hover:px-2.5 focus:px-[9px] pt-4 placeholder-shown:pt-0 text-base leading-none text-black outline-none border hover:border-2 focus:border-[3px] hover:border-light-yellow/50 focus:border-light-yellow peer",
            error && "!border-red-900",
            className
          )}
          placeholder=" "
        />

        <label
          htmlFor={inputId}
          className="absolute text-xs left-3 top-1.5 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>

        {search && (
          <button
            type="button"
            className={cn(
              "absolute top-1/2 right-2 cursor-pointer",
              error && "!top-1/4"
            )}
            onClick={onSearchClick}
          >
            <MagnifyingGlassIcon />
          </button>
        )}

        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
