import React from "react";

function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center text-center transition-all duration-300 rounded-[6px]",
        "px-6 py-4 min-w-[160px]", 
        "leading-tight",
        className
      )}
      style={{
        fontFamily: '"Poppins", sans-serif',
        fontSize: "16px",
        fontWeight: 500,
        color: "rgb(35, 40, 45)",
        background: "linear-gradient(to bottom, #EAD7B5 0%, #D4B688 50%, #C69E65 100%)",
        cursor: "pointer",
        
        border: "none",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </button>
  );
}