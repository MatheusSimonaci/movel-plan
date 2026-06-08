import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "solid";
}

function Badge({ className, variant = "outline", children, ...props }: BadgeProps) {
  const variants: Record<"outline" | "solid", string> = {
    outline: "border border-clay text-ink-soft",
    solid: "bg-clay text-ink border border-clay",
  };
  return (
    <span
      className={cn(
        "inline-block rounded-xs px-[10px] py-1 text-micro font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge };
