import React from "react";

interface TextProps {
  children: React.ReactNode;
  variant: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, variant, as = "p", className = "" }) => {
  const variantClasses: { [key: string]: string } = {
    SRegular: "text-2xl",
    SSemiBold: "text-3xl font-semibold",
    MSemiBold: "text-4xl font-semibold",
  };

  const textClass: string = `${variantClasses[variant] || ""} ${className}`;

  const Element = as as keyof JSX.IntrinsicElements;

  return <Element className={textClass}>{children}</Element>;
};