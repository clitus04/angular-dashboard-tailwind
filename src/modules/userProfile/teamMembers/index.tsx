import { useCallback } from "react";
import { members } from "./data";
import { MdMail } from "react-icons/md";

const TeamMembers: React.FC = () => {
  const statusColor = useCallback((status: string) => {
    switch (status) {
      case "Available":
        return "text-green-400";
      case "Busy":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  }, []);
  return (
    <div className="rounded-xl overflow-hidden bg-white px-[5%] py-[7%] shadow-md">
      <div className="text-[1.5vw]">Team Members</div>
      <div className="mt-[1.5vw]">
        {members &&
          members.map(({ id, name, profile, status }) => (
            <div key={id} className="flex gap-[2vw] items-center mb-[0.75vw]">
              <img className="w-[2vw] rounded-full" src={profile} alt="" />
              <div className="flex flex-col flex-1">
                <span className="text-[1vw]">{name}</span>
                <span className={`${statusColor(status)} text-[0.75vw]`}>{status}</span>
              </div>
              <span className="rounded-full border-2 border-[#6BD098] p-[1.5%]">
                <MdMail color="#6BD098" />
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamMembers;
