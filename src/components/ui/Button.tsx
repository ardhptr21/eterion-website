import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={cn(
        "w-max h-6 p-5 bg-gradient-to-t from-[#56C5FE] to-neutral-200 rounded-[15px] shadow-[1px_1px_10px_0px_rgba(255,255,255,1.00)] flex justify-center items-center gap-2.5 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer text-gray-950 font-bold font-nexa",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
