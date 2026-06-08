import { cn } from "@/lib/utils";
import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helpText, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={id} className="text-eyebrow uppercase text-ink-muted font-medium">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "h-12 w-full rounded-sm border border-ink-line bg-bone-50 px-4 py-[14px]",
            "text-body text-ink placeholder:text-ink-muted",
            "transition-colors duration-fast",
            "focus:bg-white focus:border-ink focus:outline-none focus:shadow-focus",
            error && "border-danger focus:border-danger",
            className
          )}
          {...props}
        />
        {(helpText || error) && (
          <p className={cn("text-micro", error ? "text-danger" : "text-ink-muted")}>
            {error || helpText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helpText?: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, helpText, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={id} className="text-eyebrow uppercase text-ink-muted font-medium">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "w-full rounded-sm border border-ink-line bg-bone-50 px-4 py-[14px]",
            "text-body text-ink placeholder:text-ink-muted",
            "transition-colors duration-fast resize-none",
            "focus:bg-white focus:border-ink focus:outline-none focus:shadow-focus",
            error && "border-danger focus:border-danger",
            className
          )}
          {...props}
        />
        {(helpText || error) && (
          <p className={cn("text-micro", error ? "text-danger" : "text-ink-muted")}>
            {error || helpText}
          </p>
        )}
      </div>
    );
  }
);
TextArea.displayName = "TextArea";

export { Input, TextArea };
