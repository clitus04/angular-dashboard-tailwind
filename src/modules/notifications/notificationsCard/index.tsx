import NotificationsListCard from "./notificationsListCard";
import { data1, data2 } from "./data";

const NotificationsCard = () => {
  return (
    <div className="bg-white rounded-xl p-[1.5%] shadow-md">
      <div className="py-[1vh] text-[1.5vw] text-primary-900">
        Notifications
      </div>
      <div className="text-primary-300 text-[1vw]">
        Handcrafted By Our Friend{" "}
        <span className="text-blue-400 cursor-pointer hover:underline ml-1">
          Robert McIntosh
        </span>
        . Please Checkout The{" "}
        <span className="text-blue-400 cursor-pointer hover:underline ml-1">
          Full Documentation
        </span>
        .
      </div>
      <div className="flex flex-col md:flex-row md:gap-[3vw]">
        <div className="flex-1 mt-[2vw]">
          <NotificationsListCard
            title="Notifications Style"
            listItems={data1}
          />
        </div>
        <div className="flex-1 mt-[2vw]">
          <NotificationsListCard
            title="Notifications States"
            listItems={data2}
          />
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;
