import { ComponentProps, forwardRef } from "react";
import { cn } from "../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, className, isLoading, disabled, ...rest }, ref) => {
    return (
      <button
        {...rest}
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "box-border w-full text-black h-[52px] rounded-[20px] bg-light-yellow px-[15px] font-medium leading-none focus:outline-none mt-[10px] transition-all disabled:bg-light-yellow/40 disabled:cursor-not-allowed",
          className
        )}
      >
        <span className="flex items-center justify-center gap-2">
          {isLoading && <Spinner />}
          {text}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
