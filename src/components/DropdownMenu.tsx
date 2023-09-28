import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../app/utils/cn";

interface DropdownMenuProps {
  /**
   * A react component you want to insert into the dropdown menu.
   */
  children: React.ReactNode;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
}

function DropdownRoot({ children }: { children: React.ReactNode }) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

function DropdownTrigger({ children, className }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Trigger className={cn("outline-none", className)}>
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

function DropdownContent({ children, className }: DropdownMenuProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          "rounded-2xl p-2 bg-white space-y-2 shadow-lg z-50",
          "data-[side=bottom]:animate-slide-up-and-fade",
          "data-[side=top]:animate-slide-down-and-fade",
          className
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

interface DropdownMenuItemProps {
  /**
   * A react component you want to insert into the dropdown item.
   */
  children: React.ReactNode;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
  /**
   * A function that you want to call when the item is selected.
   */
  onSelect?(): void;
}

function DropdownItem({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        "min-h-[40px] outline-none flex items-center px-4 py-2 text-gray-400 text-sm data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer",
        className
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
};

/**
 * EXEMPLO
 *
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <h1>oi</h1>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-32">
        <DropdownMenu.Item
          className="flex items-center justify-between"
          onSelect={() => alert("sair")}
        >
          Sair
          <ExitIcon />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
 */
