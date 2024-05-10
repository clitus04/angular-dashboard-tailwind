import member1 from "../../../assets/member-1.jpg";
import member2 from "../../../assets/member-2.jpg";
import member3 from "../../../assets/member-3.jpg";

interface Members {
  id: number;
  profile: string;
  name: string;
  status: "Offline" | "Available" | "Busy";
}

export const members: Members[] = [
  {
    id: 0,
    profile: member1,
    name: "DJ Khaled",
    status: "Offline",
  },
  {
    id: 1,
    profile: member2,
    name: "Creative Tim",
    status: "Available",
  },
  {
    id: 2,
    profile: member3,
    name: "DJ Khaled",
    status: "Busy",
  },
];
