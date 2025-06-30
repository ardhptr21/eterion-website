import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  as?: React.ElementType;
  className?: string;
}

export default function Container({ as, className, children }: ContainerProps) {
  const Comp = as || "div";

  return <Comp className={cn("px-0 md:px-0", className)}>{children}</Comp>;
}