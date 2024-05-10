import EditProfile from "./editProfile";
import ProfileCard from "./profileCard";
import TeamMembers from "./teamMembers";

const UserProfile: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[2.5vw]">
      <div className="w-full md:w-[33%]">
        <ProfileCard />
        <TeamMembers />
      </div>
      <div className="w-full md:w-[66%]">
        <EditProfile />
      </div>
    </div>
  );
};

export default UserProfile;
