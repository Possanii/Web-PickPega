import { forwardRef } from "react";
import { cn } from "../app/utils/cn";

interface ButtonProps {
  /**
   * A string you want to show inside the button.
   */
  text: string;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
  /**
   * A string type that you want the component executed.
   */
  type?: "button" | "submit" | "reset" | undefined;
  /**
   * A function that you want to call when the button is clicked.
   */
  onClick?(): void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function (
  { text, type = "button", className, onClick },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "box-border w-3/4 text-white h-[35px] rounded-[20px] bg-light-yellow px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:outline-none mt-[10px]",
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
});
