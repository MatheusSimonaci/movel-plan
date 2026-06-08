import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "portfolio" | "surface";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "surface", ...props }, ref) => {
    const variants: Record<"portfolio" | "surface", string> = {
      portfolio: "relative overflow-hidden rounded-md bg-bone-50 shadow-sm",
      surface: "rounded-md bg-bone-50 border border-ink-line shadow-xs",
    };
    return (
      <div ref={ref} className={cn(variants[variant], className)} {...props} />
    );
  }
);
Card.displayName = "Card";

export { Card };
