import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  as?: React.ElementType;
  className?: string;
}

export default function Container({ as, className, children }: ContainerProps) {
  const Comp = as || "div";

  // @ts-expect-error – suppress JSX tag children error
  return <Comp className={cn("px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-full mx-auto overflow-hidden", className)}>{children}</Comp>;
}
