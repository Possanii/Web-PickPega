// your-select.jsx
import { forwardRef } from "react";
import * as RdxSelect from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { cn } from "../app/utils/cn";

interface SelectProps {
  children: React.ReactNode;
  /**
   * A string to show when no items are selected
   */
  placeholder?: string;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ children, placeholder, ...props }, forwardedRef) => {
    return (
      <RdxSelect.Root {...props}>
        <RdxSelect.Trigger
          className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
          aria-label="Food"
          ref={forwardedRef}
        >
          <RdxSelect.Value placeholder={placeholder} />
          <RdxSelect.Icon>
            <ChevronDownIcon />
          </RdxSelect.Icon>
        </RdxSelect.Trigger>
        <RdxSelect.Portal>
          <RdxSelect.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <RdxSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronUpIcon />
            </RdxSelect.ScrollUpButton>
            <RdxSelect.Viewport className="p-[5px]">
              {children}
            </RdxSelect.Viewport>
            <RdxSelect.ScrollDownButton>
              <ChevronDownIcon />
            </RdxSelect.ScrollDownButton>
          </RdxSelect.Content>
        </RdxSelect.Portal>
      </RdxSelect.Root>
    );
  }
);

interface SelectItemProps {
  children: React.ReactNode;
  /**
   * A item value when selected
   */
  value: string;
  className?: string;
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, value, className, ...props }, forwardedRef) => {
    return (
      <RdxSelect.Item
        value={value}
        className={cn(
          "text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <RdxSelect.ItemText>{children}</RdxSelect.ItemText>
        <RdxSelect.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </RdxSelect.ItemIndicator>
      </RdxSelect.Item>
    );
  }
);

Select.displayName = "Select";
