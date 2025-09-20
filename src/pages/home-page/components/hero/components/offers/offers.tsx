import { Skeleton } from "@/components/ui";

export default function Offers() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6">
      <Skeleton className="w-223.5 aspect-[2]" />
      <Skeleton className="h-full" />
    </div>
  );
}
