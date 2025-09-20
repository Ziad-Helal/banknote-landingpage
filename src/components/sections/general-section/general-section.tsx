import { buttonVariants } from "@/components/ui";
import { Container } from "@/components/sections";
import { Link } from "react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface General_Section_Props {
  heading: string;
  children: ReactNode;
  seeMore?: {
    label: string;
    route: string;
  };
}

export default function General_Section({ heading, seeMore, children }: General_Section_Props) {
  return (
    <Container className="my-16" as="section" aria-label={heading}>
      <header className="mb-8 flex items-center justify-between">
        <h2 className="text-[28px] dark:text-white">{heading}</h2>
        {seeMore && (
          <Link to={seeMore.route} className={cn(buttonVariants({ variant: "outline" }), "font-[Cairo] font-medium text-sm")}>
            {seeMore.label}
          </Link>
        )}
      </header>
      <div className="grid grid-cols-2 min-[33rem]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-6">{children}</div>
    </Container>
  );
}
