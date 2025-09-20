import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export const contacts = [
  {
    label: "address",
    url: "maps.google.com/#",
    icon: MapPinIcon,
  },
  {
    label: "phone",
    url: "tel:+201069269754",
    icon: PhoneIcon,
  },
  {
    label: "email",
    url: "mailto:info@banknotestore.com",
    icon: MailIcon,
  },
] as const;
