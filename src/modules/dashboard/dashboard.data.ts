import { CiGlobe, CiDatabase } from "react-icons/ci";
import { MdOutlineAccountTree } from "react-icons/md";
import { FaRegHeart, FaRegCalendar } from "react-icons/fa";
import { LuRefreshCcw, LuHistory } from "react-icons/lu";
import { IconType } from "react-icons";

export interface TopCardsData {
  id: number;
  title: string;
  value: string;
  Icon: IconType;
  iconColor: string;
  FooterIcon: IconType;
  footerText: string;
}

export const topCardsData: TopCardsData[] = [
  {
    id: 0,
    title: "Capacity",
    value: "150 GB",
    Icon: CiGlobe,
    iconColor: "#FBC658",
    FooterIcon: LuRefreshCcw,
    footerText: "Update Now",
  },
  {
    id: 1,
    title: "Revenue",
    value: "$ 1,345",
    Icon: CiDatabase,
    iconColor: "#6BD098",
    FooterIcon: FaRegCalendar,
    footerText: "Last day",
  },
  {
    id: 2,
    title: "Errors",
    value: "23",
    Icon: MdOutlineAccountTree,
    iconColor: "#EF8157",
    FooterIcon: LuHistory,
    footerText: "In the last hour",
  },
  {
    id: 3,
    title: "Followers",
    value: "+45k",
    Icon: FaRegHeart,
    iconColor: "#51CBCE",
    FooterIcon: LuRefreshCcw,
    footerText: "Update Now",
  },
];
