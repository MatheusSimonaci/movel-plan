"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

function Chip({ className, active, children, ...props }: ChipProps) {
  return (
    <button
      aria-pressed={active}
      className={cn(
        "flex-shrink-0 rounded-full px-4 py-[10px] text-meta font-medium transition-colors duration-fast ease-standard",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass focus-visible:outline-offset-2 focus-visible:shadow-focus",
        active
          ? "bg-ink text-bone border border-ink"
          : "bg-transparent text-ink-soft border border-ink-line hover:border-ink hover:text-ink",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Chip };
