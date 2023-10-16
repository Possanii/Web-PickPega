import * as RdxModal from "@radix-ui/react-dialog";
import { cn } from "../app/utils/cn";
import { Cross2Icon } from "@radix-ui/react-icons";

interface ModalProps {
  open: boolean;
  className?: string;
  onClose?(): void;
  title: string;
  rightAction?: React.ReactNode;
  children: React.ReactNode;
}

export function Modal({
  open,
  className,
  onClose,
  title,
  rightAction,
  children,
}: ModalProps) {
  return (
    <RdxModal.Root open={open} onOpenChange={onClose}>
      <RdxModal.Portal>
        <RdxModal.Overlay className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm data-[state=open]:animate-overlayShow" />
        <RdxModal.Content
          className={cn(
            "data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[1000]",
            "w-full max-w-[500px] outline-none",
            className
          )}
        >
          <header className="h-12 flex justify-between items-center text-light-yellow">
            <button
              className="w-12 h-12 flex items-center justify-center outline-none"
              onClick={onClose}
            >
              <Cross2Icon className="w-6 h-6" />
            </button>
            <span className="text-2xl font-bold">{title}</span>
            <div className="w-24 h-24 flex items-center justify-center">
              {rightAction}
            </div>
          </header>
          <div>{children}</div>
        </RdxModal.Content>
      </RdxModal.Portal>
    </RdxModal.Root>
  );
}
