import { GitCompareArrowsIcon, HeartIcon, ShoppingCartIcon, User2Icon } from "lucide-react";
import { routes } from "./routes";

export const quickNavigationRoutes = [
  {
    label: "account",
    route: routes.account,
    icon: User2Icon,
    isIcon: false,
  },
  {
    label: "compare",
    route: routes.compare,
    icon: GitCompareArrowsIcon,
    isIcon: true,
  },
  {
    label: "wishlist",
    route: routes.wishlist,
    icon: HeartIcon,
    isIcon: false,
  },
  {
    label: "cart",
    route: routes.cart,
    icon: ShoppingCartIcon,
    isIcon: false,
  },
] as const;

export const mainNavigationRoutes = [
  {
    label: "home",
    route: routes.home,
  },
  {
    label: "about",
    route: routes.about,
  },
  {
    label: "shop",
    route: routes.products,
  },
  {
    label: "contact",
    route: routes.contactUs,
  },
  {
    label: "orders",
    route: routes.orders,
  },
] as const;

export const sitemap = [
  {
    heading: "store",
    routes: [
      {
        label: "account",
        route: routes.account,
      },
      {
        label: "orders",
        route: routes.orders,
      },
      {
        label: "address",
        route: routes.address,
      },
    ],
  },
  {
    heading: "help",
    routes: [
      {
        label: "contact",
        route: routes.contactUs,
      },
      {
        label: "faqs",
        route: routes.faqs,
      },
      {
        label: "terms",
        route: routes.terms,
      },
      {
        label: "privacy",
        route: routes.privacy,
      },
    ],
  },
] as const;
