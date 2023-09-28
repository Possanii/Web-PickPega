import { cn } from "../app/utils/cn";

interface CardRootProps {
  /**
   * A react component you want to insert into the card.
   */
  children: React.ReactNode;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
}

function CardRoot({ children, className }: CardRootProps) {
  return (
    <div
      className={cn(
        "relative w-full flex flex-col bg-white rounded-lg box-border shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

export const Card = {
  Root: CardRoot,
};
