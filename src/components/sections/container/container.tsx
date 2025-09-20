import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType } from "react";

type Container_Props<C extends ElementType> = ComponentPropsWithoutRef<C> & {
  as?: C;
};

export default function Container<C extends ElementType = "div">({ as, children, className, ...props }: Container_Props<C>) {
  const Component = as || "div";

  return (
    <Component className={cn("container", className)} {...props}>
      {children}
    </Component>
  );
}
