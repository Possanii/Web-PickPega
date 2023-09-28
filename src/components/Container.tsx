import { cn } from "../app/utils/cn";

interface ContainerProps {
  /**
   * A react component you want to insert into the container.
   */
  children: React.ReactNode;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
  /**
   * Set container 100% wide until small breakpoint.
   */
  sm?: boolean;
  /**
   * Set container 100% wide until medium breakpoint.
   */
  md?: boolean;
  /**
   * Set container 100% wide until large breakpoint.
   */
  lg?: boolean;
  /**
   * Set container 100% wide until X-large breakpoint.
   */
  xl?: boolean;
  /**
   * Set container 100% wide until XX-large breakpoint.
   */
  xxl?: boolean;
}

const BREAKPOINTS = [
  "xxl" as const,
  "xl" as const,
  "lg" as const,
  "md" as const,
  "sm" as const,
];

export function Container({ children, className, ...rest }: ContainerProps) {
  const responsiveClassNames: string[] = [];

  BREAKPOINTS.forEach((bp) => {
    const breakpoint = rest[bp];
    delete rest[bp];
    if (breakpoint) {
      switch (bp) {
        case "xxl":
          responsiveClassNames.push("max-w-screen-2xl mx-auto");
          break;
        case "xl":
          responsiveClassNames.push("max-w-screen-xl mx-auto");
          break;
        case "lg":
          responsiveClassNames.push("max-w-screen-lg mx-auto");
          break;
        case "md":
          responsiveClassNames.push("max-w-screen-md mx-auto");
          break;
        default:
          responsiveClassNames.push("max-w-screen-sm mx-auto");
          break;
      }
    }
  });

  const _className = cn(
    responsiveClassNames.length ? responsiveClassNames : "container mx-auto",
    className
  );

  return <div className={_className}>{children}</div>;
}
