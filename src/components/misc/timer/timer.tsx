import { calculateTimeLeft } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Timer_Prop {
  due: Date;
}

export default function Timer({ due }: Timer_Prop) {
  const { t } = useTranslation("dateAndTime");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(due));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(due));
    }, 1000);

    return () => clearInterval(interval);
  }, [due]);

  return (
    <p className="text-center flex gap-2 lg:gap-6 text-sm font-[Cairo] font-bold">
      {Object.keys(timeLeft).map((label) => (
        <span key={label} className="p-2 bg-accent rounded">
          {t(label as keyof typeof timeLeft, { count: timeLeft[label as keyof typeof timeLeft] })}
        </span>
      ))}
    </p>
  );
}
