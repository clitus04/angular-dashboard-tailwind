interface TemplateProps {
  children: string;
}

const NotificationTemplate: React.FC<TemplateProps> = ({ children }) => (
  <span className="w-[20%] bg-[#34B5B8] text-white p-[0.5vw] flex justify-center items-center rounded-md font-semibold">
    {children}
  </span>
);

const NotificationsPlaces: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-[1.5%] mt-[3vh] shadow-md flex flex-col items-center">
      <div className="py-[1vh] text-[1.75vw] text-primary-900 mt-[2vh]">
        Notifications Places
      </div>
      <div className="text-primary-300 text-[1.25vw] font-thin mb-[4vh]">
        Click To View Notifications
      </div>
      <div className="flex justify-center w-full gap-[2vw] mb-[3vh]">
        <NotificationTemplate>TOP LEFT</NotificationTemplate>
        <NotificationTemplate>TOP CENTER</NotificationTemplate>
        <NotificationTemplate>TOP RIGHT</NotificationTemplate>
      </div>
      <div className="flex justify-center w-full gap-[2vw]">
        <NotificationTemplate>BOTTOM LEFT</NotificationTemplate>
        <NotificationTemplate>BOTTOM CENTER</NotificationTemplate>
        <NotificationTemplate>BOTTOM RIGHT</NotificationTemplate>
      </div>
    </div>
  );
};

export default NotificationsPlaces;
