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
    <Link to={`${routes.categories}/${id}`} className={cn("relative block overflow-hidden hover:[&_img]:scale-105", isCompact ? "rounded-xl" : "rounded hover:[&>p]:text-accent")}>
      <Image
        src={image}
        className="object-cover transition-[scale]"
        containerProps={{ className: cn("", isCompact ? "size-full rounded-xl" : "h-auto w-full aspect-[200/184] rounded") }}
        alt={name}
      />
      <p
        className={cn(
          isCompact ? "text-center p-1 absolute inset-0 flex items-center justify-center bg-primary/70 opacity-0 hover:opacity-100 transition-opacity" : "mt-4 dark:text-white"
        )}
      >
        {name}
      </p>
    </Link>
  );
}
