import { ComponentProps, forwardRef } from "react";
import { cn } from "../app/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, className, onClick }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "box-border w-full text-white h-[35px] rounded-[20px] bg-light-yellow px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:outline-none mt-[10px]",
          className
        )}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
);

Button.displayName = "Button";
