import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
};

const baseClasses =
  "button-cta group inline-flex items-center justify-center gap-2 rounded-lg text-[13px] font-semibold transition-[background-color,border-color,box-shadow,color,transform] duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb694] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0e11] disabled:pointer-events-none disabled:opacity-60 motion-safe:hover:-translate-y-px";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#ff6a00] text-[#571f00] shadow-[0_0_20px_rgba(255,106,0,0.18)] hover:bg-[#ffb694] hover:shadow-[0_0_24px_rgba(255,106,0,0.28)]",
  secondary:
    "border border-white/15 bg-transparent text-[#f5f5f2] hover:border-white/30 hover:bg-white/5",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      <span>{children}</span>
      <ArrowRight className="size-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
    </button>
  );
}
