import {
  AppleIcon,
  BarrelIcon,
  CarFrontIcon,
  Flower2Icon,
  GemIcon,
  GiftIcon,
  HandbagIcon,
  HeartPulseIcon,
  HomeIcon,
  MonitorIcon,
  PawPrintIcon,
  ShirtIcon,
  TreesIcon,
} from "lucide-react";

export const categories = [
  {
    label: "homeAndFurniture",
    icon: HomeIcon,
    items: undefined,
  },
  {
    label: "food",
    icon: AppleIcon,
    items: ["cannedFood", "frozenFood", "syrupsAndFlavors", "dairyProducts", "freshVegetables", "sweets"],
  },
  {
    label: "boxes",
    icon: GiftIcon,
    items: undefined,
  },
  {
    label: "wood",
    icon: TreesIcon,
    items: undefined,
  },
  {
    label: "filling",
    icon: BarrelIcon,
    items: undefined,
  },
  {
    label: "fashion",
    icon: ShirtIcon,
    items: undefined,
  },
  {
    label: "technologySupplies",
    icon: MonitorIcon,
    items: undefined,
  },
  {
    label: "bags",
    icon: HandbagIcon,
    items: undefined,
  },
  {
    label: "healthAndMedicine",
    icon: HeartPulseIcon,
    items: undefined,
  },
  {
    label: "cars",
    icon: CarFrontIcon,
    items: undefined,
  },
  {
    label: "accessories",
    icon: GemIcon,
    items: undefined,
  },
  {
    label: "agriculture",
    icon: Flower2Icon,
    items: undefined,
  },
  {
    label: "animalsFeeds",
    icon: PawPrintIcon,
    items: undefined,
  },
] as const;
