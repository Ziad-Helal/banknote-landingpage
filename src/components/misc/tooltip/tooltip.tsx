import { Tooltip as TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { forwardRef } from "react";
import type { ForwardedRef, ReactNode } from "react";

interface ToolTip_Props {
  trigger: ReactNode;
  content: ReactNode;
}

const Tooltip = forwardRef(({ trigger, content }: ToolTip_Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <TooltipProvider delayDuration={300}>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent ref={ref} className="max-w-sm">
        {typeof content === "string" ? <p>{content}</p> : content}
      </TooltipContent>
    </TooltipProvider>
  );
});

export default Tooltip;
