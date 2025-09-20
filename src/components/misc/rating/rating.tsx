import { Tooltip } from "@/components/misc";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";

interface Rating_Props {
  rating: number;
}

export default function Rating({ rating }: Rating_Props) {
  return (
    <Tooltip
      trigger={
        <div className={cn("w-fit flex gap-1 items-center justify-center")}>
          {Array(5)
            .fill(0)
            .map((_, index) => {
              const color = Math.round(rating) > index ? "#FFD21F" : "#A9A9A9";
              return (
                <span key={index}>
                  <StarIcon fill={color} stroke={color} className="size-3.5" />
                </span>
              );
            })}
        </div>
      }
      content={rating}
    />
  );
}
