import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loading, Tooltip } from "@/components/misc";
import { Button as ClassicButton } from "@/components/ui";
import type { ButtonProps } from "@/components/ui";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const iconSizeVariants = cva("", {
  variants: {
    size: {
      default: "size-5",
      sm: "size-4",
      lg: "size-6",
      icon: "size-5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface Button_Props extends ButtonProps {
  icon?: LucideIcon;
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
  iconClassName?: string;
  isLoading?: boolean;
  loadingText?: string;
  tooltip?: ReactNode;
}

export default function Button({
  icon: Icon,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  className,
  iconClassName,
  isLoading,
  loadingText,
  size,
  tooltip,
  children,
  ...props
}: Button_Props) {
  const iconClassNames = cn(iconSizeVariants({ size }), iconClassName);
  const iconProps = { className: iconClassNames };

  const btn = (
    <ClassicButton className={className} type={props.type || "button"} disabled={props.disabled || isLoading} size={size} {...props}>
      {LeadingIcon && !isLoading && <LeadingIcon {...iconProps} />}
      {isLoading ? (
        <Loading iconClassName={iconClassNames} loadingText={size == "icon" ? undefined : loadingText || children} />
      ) : size == "icon" ? (
        Icon ? (
          <>
            <Icon {...iconProps} />
            <span className="sr-only">{children}</span>
          </>
        ) : (
          children
        )
      ) : (
        children
      )}
      {TrailingIcon && !isLoading && <TrailingIcon {...iconProps} />}
    </ClassicButton>
  );

  return tooltip ? <Tooltip trigger={btn} content={tooltip} /> : btn;
}
