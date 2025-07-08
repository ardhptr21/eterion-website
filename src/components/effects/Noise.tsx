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
    if (!parent) return;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
  };

  const buildNoise = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
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
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resize(canvas);
    buildNoise(canvas, ctx);

    const handleResize = () => {
      resize(canvas);
      buildNoise(canvas, ctx);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none opacity-70 z-0", className)}
    />
  );
}
