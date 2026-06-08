import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

const Container = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-[1320px]",
        "px-[clamp(var(--space-5),5vw,var(--space-9))]",
        className
      )}
      {...props}
    />
  )
);
Container.displayName = "Container";

export { Container };
