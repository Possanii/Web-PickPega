import * as RdxSeparator from "@radix-ui/react-separator";
import { cn } from "../app/utils/cn";

interface SeparatorProps {
  className?: string;
  orientation?: "vertical" | "horizontal";
}

export function Separator({ className, orientation }: SeparatorProps) {
  return (
    <RdxSeparator.Root
      orientation={orientation}
      className={cn(
        "bg-black data-[orientation=horizontal]:h-[1px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[1px]",
        className
      )}
    />
  );
}
