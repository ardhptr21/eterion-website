import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  as?: React.ElementType;
  className?: string;
}

export default function Container({ as, className, children }: ContainerProps) {
  const Comp = as || "div";

  // @ts-expect-error – suppress JSX tag children error
  return <Comp className={cn("px-5 md:px-20", className)}>{children}</Comp>;
}
