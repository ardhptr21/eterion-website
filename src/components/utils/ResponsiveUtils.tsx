"use client";

import { useEffect, useState } from 'react';

// Custom hook untuk mendeteksi ukuran layar
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : false,
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call immediately to set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}

// Utility untuk responsive image sizes
export function getResponsiveImageSize(baseSize: number, screenSize: { isMobile: boolean; isTablet: boolean; isDesktop: boolean }) {
  if (screenSize.isMobile) return Math.floor(baseSize * 0.4);
  if (screenSize.isTablet) return Math.floor(baseSize * 0.7);
  return baseSize;
}

// Utility untuk responsive font sizes
export function getResponsiveFontSize(baseFontSize: string, screenSize: { isMobile: boolean; isTablet: boolean; isDesktop: boolean }) {
  const sizeMap: { [key: string]: { mobile: string; tablet: string; desktop: string } } = {
    'text-xs': { mobile: 'text-xs', tablet: 'text-sm', desktop: 'text-xs' },
    'text-sm': { mobile: 'text-xs', tablet: 'text-sm', desktop: 'text-sm' },
    'text-base': { mobile: 'text-sm', tablet: 'text-base', desktop: 'text-base' },
    'text-lg': { mobile: 'text-base', tablet: 'text-lg', desktop: 'text-lg' },
    'text-xl': { mobile: 'text-lg', tablet: 'text-xl', desktop: 'text-xl' },
    'text-2xl': { mobile: 'text-xl', tablet: 'text-2xl', desktop: 'text-2xl' },
    'text-3xl': { mobile: 'text-xl', tablet: 'text-2xl', desktop: 'text-3xl' },
    'text-4xl': { mobile: 'text-2xl', tablet: 'text-3xl', desktop: 'text-4xl' },
    'text-5xl': { mobile: 'text-2xl', tablet: 'text-4xl', desktop: 'text-5xl' },
    'text-6xl': { mobile: 'text-3xl', tablet: 'text-4xl', desktop: 'text-6xl' },
    'text-7xl': { mobile: 'text-3xl', tablet: 'text-5xl', desktop: 'text-7xl' },
  };

  const sizes = sizeMap[baseFontSize] || { mobile: 'text-base', tablet: 'text-base', desktop: 'text-base' };

  if (screenSize.isMobile) return sizes.mobile;
  if (screenSize.isTablet) return sizes.tablet;
  return sizes.desktop;
}

// Component wrapper untuk responsive container
export function ResponsiveContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto ${className}`}>
      {children}
    </div>
  );
}

// Component untuk responsive grid
export function ResponsiveGrid({ 
  children, 
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "gap-4",
  className = ""
}: { 
  children: React.ReactNode; 
  cols?: { mobile: number; tablet: number; desktop: number };
  gap?: string;
  className?: string;
}) {
  const gridCols = `grid-cols-${cols.mobile} sm:grid-cols-${cols.tablet} lg:grid-cols-${cols.desktop}`;
  
  return (
    <div className={`grid ${gridCols} ${gap} ${className}`}>
      {children}
    </div>
  );
}

// Touch-friendly button component
export function TouchFriendlyButton({
  children,
  onClick,
  className = "",
  variant = "primary"
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const baseClasses = "min-h-[44px] min-w-[44px] px-4 py-2 rounded-lg transition-all duration-300 font-medium";
  
  const variantClasses = {
    primary: "bg-accent text-dark hover:bg-accent/90 active:bg-accent/80",
    secondary: "border-2 border-accent text-accent hover:bg-accent hover:text-dark active:bg-accent/90",
    ghost: "text-foreground hover:text-accent hover:bg-accent/10 active:bg-accent/20"
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
