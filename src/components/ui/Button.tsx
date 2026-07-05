import React from "react";
function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const baseStyles = "px-6 py-2.5 rounded text-[16px] font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-gold-gradient text-dark-alt hover:opacity-90 shadow-sm",
    outline: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-dark-alt",
  };

  return (
    <button
      {...props}
      className={`inline-block text-center transition-all duration-300 hover:opacity-90 ${className}`}
      style={{
        height: "36px",
        width: "138px",
        padding: "10px 20px",
        fontFamily: '"Poppins", sans-serif',
        fontSize: "16px",
        fontWeight: 500,
        color: "rgb(35, 40, 45)",
        background: "linear-gradient(to bottom, #EAD7B5 0%, #D4B688 50%, #C69E65 100%)",
        cursor: "pointer",
        lineHeight: "16px",
        border: "none",
        borderRadius: "6px", 
      }}
    >
      {children}
    </button>
  );
}