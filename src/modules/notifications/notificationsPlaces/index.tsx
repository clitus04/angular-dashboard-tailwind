interface TemplateProps {
  children: string;
}

const NotificationTemplate: React.FC<TemplateProps> = ({ children }) => (
  <span className="w-[100%] sm:w-[45%] lg:w-[30%] mb-[2vw] sm:mb-[1vw] lg:mb-[0] bg-[#34B5B8] text-white p-[2vw] sm:p-[1vw] lg:p-[0.5vw] flex justify-center items-center rounded-md font-semibold">
    {children}
  </span>
);

const NotificationsPlaces: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-[1.5%] mt-[3vh] shadow-md flex flex-col items-center">
      <div className="py-[1vh] text-[4vw] sm:text-[2.5vw] lg:text-[1.75vw] text-primary-900 mt-[2vh]">
        Notifications Places
      </div>
      <div className="text-primary-300 text-[2.75vw] sm:text-[2vw] lg:text-[1.25vw] font-thin mb-[4vh]">
        Click To View Notifications
      </div>
      <div className="flex flex-wrap justify-center w-full gap-[2vw] mb-[3vh] px-[15%]">
        <NotificationTemplate>TOP LEFT</NotificationTemplate>
        <NotificationTemplate>TOP CENTER</NotificationTemplate>
        <NotificationTemplate>TOP RIGHT</NotificationTemplate>
        <NotificationTemplate>BOTTOM LEFT</NotificationTemplate>
        <NotificationTemplate>BOTTOM CENTER</NotificationTemplate>
        <NotificationTemplate>BOTTOM RIGHT</NotificationTemplate>
      </div>
    </div>
  );
};

export default NotificationsPlaces;
