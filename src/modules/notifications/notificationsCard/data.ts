import { IconType } from "react-icons";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPieChartOutline } from "react-icons/io5";

interface Data {
  id: number;
  title?: string;
  text: string;
  variant?: string;
  closable?: boolean;
  Icon?: IconType;
}

export const data1: Data[] = [
  {
    id: 0,
    text: "This is a plain notification",
    closable: false,
  },
  {
    id: 1,
    text: "This is a notification with close button.",
  },
  {
    id: 2,
    text: "This is a notification with close button and icon.",
    Icon: IoIosNotificationsOutline,
  },
  {
    id: 3,
    text: "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
    Icon: IoPieChartOutline,
  },
];

export const data2: Data[] = [
  {
    id: 0,
    title: "Primary",
    text: 'This is a regular notification made with ".alert-primary"',
    variant: "primary",
  },
  {
    id: 1,
    title: "Info",
    text: 'This is a regular notification made with ".alert-info"',
    variant: "info",
  },
  {
    id: 2,
    title: "Success",
    text: 'This is a regular notification made with ".alert-success"',
    variant: "success",
  },
  {
    id: 3,
    title: "Warning",
    text: 'This is a regular notification made with ".alert-warning"',
    variant: "warning",
  },
  {
    id: 4,
    title: "Danger",
    text: 'This is a regular notification made with ".alert-danger"',
    variant: "danger",
  },
];
