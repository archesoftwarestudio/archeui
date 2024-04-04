import clsx from "clsx";
import React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "neutral" | "accent";
  size?: "large" | "medium" | "small";
  outline?: boolean;
  block?: boolean;
}

export const Button: React.FC<ButtonProps> = (
  props: ButtonProps = {
    children: <span>{"Button"}</span>,
    variant: "primary",
    size: "medium",
    outline: false,
    block: false,
  }
) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    neutral: "btn-neutral",
    accent: "btn-accent",
  };

  const sizes = {
    large: "btn-lg",
    medium: "btn-md",
    small: "btn-sm",
  };

  const { variant, block, outline, size, children, ...htmlProps } = props;

  const className = clsx(
    "btn",
    {
      [`${variants[variant!]}`]: variant,
      [`${sizes[size!]}`]: size,
      "btn-block": block,
      "btn-outline": outline,
    },
    props.className
  );

  return (
    <button {...htmlProps} className={className}>
      {children || <span>{"Button"}</span>}
    </button>
  );
};
