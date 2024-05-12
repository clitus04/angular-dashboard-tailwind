import { colors, isKeyOf } from "./data";
import { IconType } from "react-icons";
import { LiaTimesSolid } from "react-icons/lia";

interface ListItems {
  id: number;
  title?: string;
  text: string;
  variant?: string;
  closable?: boolean;
  Icon?: IconType;
}

interface Props {
  title: string;
  listItems: ListItems[];
}

const NotificationsListCard: React.FC<Props> = ({ title, listItems }) => {
  return (
    <div>
      <div className="text-[4vw] sm:text-[2.5vw] lg:text-[1.5vw] text-primary-900 px-[2%] py-[1.5vw]">
        {title}
      </div>
      {listItems &&
        listItems.map(
          ({ id, title, text, variant = "info", Icon, closable = true }) => (
            <div
              key={id}
              className={`flex items-center justify-between text-white rounded-md p-[2%] mb-[1vw] ${
                isKeyOf(colors, variant) ? colors[variant] : ""
              }`}
            >
              <div className="w-[75%] flex items-center">
                {Icon && (
                  <span className="w-[8vw] lg:w-[5vw] flex justify-center items-center">
                    <Icon size={"50%"} />
                  </span>
                )}
                <div className="flex-1">
                  {title && (
                    <span className="font-semibold">{`${title} - `}</span>
                  )}
                  {text}
                </div>
              </div>
              {closable && (
                <div className="cursor-pointer px-[0.5vw]">
                  <LiaTimesSolid />
                </div>
              )}
            </div>
          )
        )}
    </div>
  );
};

export default NotificationsListCard;
