import Link from "next/link";
import styles from "./Button.module.css";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  showIcon?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  showIcon = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = clsx(styles.button, styles[variant], className);

  const content = (
    <>
      {children}
      {showIcon && <ArrowRight size={18} className={styles.icon} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
