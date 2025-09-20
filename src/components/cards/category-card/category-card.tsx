import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { routes } from "@/routes";
import { Image } from "@/components/misc";
import type { Category } from "@/types";

interface Category_Card_Props {
  category: Category;
  isCompact?: boolean;
}

export default function Category_Card({ category, isCompact }: Category_Card_Props) {
  const { id, category: name, image } = category;

  return (
    <Link to={`${routes.categories}/${id}`} className="relative block hover:[&>p]:text-accent hover:[&_img]:scale-105">
      <Image
        src={image}
        className="object-cover transition-[scale]"
        containerProps={{ className: cn("", isCompact ? "size-33 rounded-xl" : "h-auto w-full aspect-[200/184] rounded") }}
        alt={name}
      />
      <p className={cn(isCompact ? "p-1 absolute inset-0 flex items-center justify-center bg-primary/70 opacity-0 hover:opacity-100 transition-opacity" : "mt-4 dark:text-white")}>
        {name}
      </p>
    </Link>
  );
}
