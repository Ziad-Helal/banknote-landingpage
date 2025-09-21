import { cn } from "@/lib/utils";
import { Timer } from "@/components/misc";
import { Container } from "@/components/sections";
import { buttonVariants } from "@/components/ui";
import { Link } from "react-router";
import type { ReactNode } from "react";

interface General_Section_Props {
  heading: string;
  children: ReactNode;
  className?: string;
  seeMore?: {
    label: string;
    route: string;
  };
  due?: Date;
}

export default function General_Section({ heading, seeMore, due, className, children }: General_Section_Props) {
  return (
    <Container className="my-16" as="section" aria-label={heading}>
      <header className={cn("mb-8 flex items-center justify-between", due ? "max-md:flex-col max-md:gap-4" : "")}>
        <h2 className="text-[28px] dark:text-white">{heading}</h2>
        {seeMore && (
          <Link to={seeMore.route} className={cn(buttonVariants({ variant: "outline" }), "font-[Cairo] font-medium text-sm")}>
            {seeMore.label}
          </Link>
        )}
        {due && <Timer due={due} />}
      </header>
      <div className={cn("grid grid-cols-2 min-[33rem]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-6", className)}>{children}</div>
    </Container>
  );
}
