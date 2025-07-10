import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  to: string;
}

export default function NavLink({ label, to }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    // Untuk smooth scrolling jika link internal
    if (to.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(to);
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' 
        });
      }
    }
  };

  return (
    <Link 
      href={to} 
      onClick={handleClick}
      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl group transition duration-300 block py-2 px-1 min-h-[44px] flex items-center justify-start touch-manipulation w-full"
    >
      <span className="group-hover:font-bold font-nexa text-foreground group-hover:text-accent transition-all duration-300 leading-tight">
        {label}
      </span>
      <span className="h-[2px] w-0 group-hover:w-full bg-accent transition-all duration-300 ml-auto"></span>
    </Link>
  );
}
