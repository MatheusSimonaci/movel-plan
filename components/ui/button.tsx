import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "link";
  size?: "md" | "sm";
  eyebrow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", eyebrow, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-[0.04em] transition-colors rounded-sm disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-1 focus-visible:outline-brass focus-visible:outline-offset-2 focus-visible:shadow-focus";

    const textSize = eyebrow ? "text-eyebrow uppercase tracking-[0.12em]" : "text-meta";

    const sizes: Record<"md" | "sm", string> = {
      md: "px-7 py-3 min-h-[48px]",
      sm: "px-5 py-[10px] min-h-[40px]",
    };

    const variants: Record<"primary" | "ghost" | "link", string> = {
      primary:
        "bg-ink text-bone border border-ink hover:bg-walnut-soft hover:border-walnut-soft duration-fast ease-standard",
      ghost:
        "bg-transparent text-ink border border-ink-line hover:bg-linen duration-fast ease-standard",
      link: "bg-transparent text-brass-ink border-0 rounded-none underline-offset-4 hover:underline hover:decoration-brass hover:text-ink px-0 py-0 min-h-0 duration-fast ease-standard",
    };

    return (
      <button
        ref={ref}
        className={cn(base, textSize, sizes[size], variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };

export function buttonVariants({ variant = "primary", size = "md", className = "" }: { variant?: string; size?: string; className?: string } = {}) {
  return cn("", className);
}
