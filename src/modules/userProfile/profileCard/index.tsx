import cardBackground from "../../../assets/profile-card-background.jpg";
import mikeProfile from "../../../assets/mike.jpg";

const ProfileCard: React.FC = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md mb-[3vh]">
      <div className="h-[10vw] relative">
        <img
          className="h-full w-full object-cover"
          src={cardBackground}
          alt=""
        />
        <img
          className="absolute top-[65%] left-[35%] rounded-full w-[30%] border-2 border-white"
          src={mikeProfile}
          alt=""
        />
      </div>
      <div className="bg-white flex flex-col items-center pt-[4vw] pb-[2vw] border-b">
        <span className="text-[1.5vw] text-theme-blue font-bold">
          Chet Faker
        </span>
        <span className="text-primary-300 text-[1vw] pt-[0.5vw] pb-[1vw]">
          @chetfaker
        </span>
        <p className="text-primary-300 text-[1vw] w-1/2 text-center font-normal">
          "I like the way you work it No diggity I wanna bag it up"
        </p>
      </div>
      <div className="flex justify-around py-[1vw] bg-white">
        <div className="flex flex-col items-center">
          <span className="text-[1.2vw]">12</span>
          <span className="text-[1vw]">Files</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[1.2vw]">2GB</span>
          <span className="text-[1vw]">Used</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[1.2vw]">24.6$</span>
          <span className="text-[1vw]">Spent</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
