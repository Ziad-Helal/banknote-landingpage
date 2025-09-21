import { Button } from "@/components/misc";
import { cn } from "@/lib/utils";
import { MessageCircleMoreIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

interface LiveChat_Props {
  className?: string;
}

export default function LiveChat({ className }: LiveChat_Props) {
  const { t } = useTranslation("keyWords");

  return (
    <Button
      size="icon"
      icon={MessageCircleMoreIcon}
      tooltip={t("liveChat")}
      iconClassName="!size-8"
      className={cn("rounded-full bg-accent size-16", className)}
      onClick={() => toast(t("liveChat"))}
    >
      {t("liveChat")}
    </Button>
  );
}
