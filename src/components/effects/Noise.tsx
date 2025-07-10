"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface Props {
  className?: string;
  strength?: number;
}

export default function Noise({ className, strength = 15 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resize = (canvas: HTMLCanvasElement) => {
    const parent = canvas.parentElement;
    if (!parent) return false;
    
    const width = parent.clientWidth || parent.offsetWidth || 1;
    const height = parent.clientHeight || parent.offsetHeight || 1;
    
    // Ensure minimum dimensions
    canvas.width = Math.max(width, 1);
    canvas.height = Math.max(height, 1);
    
    return canvas.width > 0 && canvas.height > 0;
  };

  const buildNoise = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    // Validate canvas dimensions
    if (canvas.width <= 0 || canvas.height <= 0) {
      console.warn('Canvas dimensions are invalid:', canvas.width, canvas.height);
      return;
    }
    
    try {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = strength;
      }
      ctx.putImageData(imageData, 0, 0);
    } catch (error) {
      console.error('Error creating noise:', error);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use timeout to ensure parent is rendered
    const initializeCanvas = () => {
      const hasValidDimensions = resize(canvas);
      if (hasValidDimensions) {
        buildNoise(canvas, ctx);
      }
    };

    // Initial setup with delay
    setTimeout(initializeCanvas, 0);

    const handleResize = () => {
      const hasValidDimensions = resize(canvas);
      if (hasValidDimensions) {
        buildNoise(canvas, ctx);
      }
    };

    // Also try after a short delay for initial render
    const delayedInit = setTimeout(initializeCanvas, 100);

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(delayedInit);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strength]); // Add strength as dependency

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none opacity-70 z-0", className)}
    />
  );
}
