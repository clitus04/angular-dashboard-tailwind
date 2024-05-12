import { useLocation, useNavigate } from "react-router-dom";
import angularIcon from "../../../assets/angular2-logo.webp";
import { useCallback } from "react";
import { menuItems } from "./sidebar.data";
import { IoRocketOutline } from "react-icons/io5";

interface Props {
  sidebarVisible: boolean;
}

const Sidebar: React.FC<Props> = ({ sidebarVisible }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => navigate(path);
  const isSelectedMenu = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location.pathname]
  );
  return (
    <div
      className={`${
        sidebarVisible ? "w-[30vw] sm:w-[20vw] lg:w-[17vw]" : "w-0 overflow-x-hidden"
      } relative`}
    >
      <div className="px-[3vw] sm:px-[1vw]">
        <div className="h-[9vh] px-[0.5vw] flex items-center border-b">
          <img
            className="w-[5vw] sm:w-[2vw] mr-[0.75em]"
            src={angularIcon}
            alt=""
          />
          <span className="text-primary-300 text-[1.75vw] sm:text-[1.1vw]">
            CREATIVE TIM
          </span>
        </div>
      </div>
      <div>
        {menuItems &&
          menuItems.map(({ id, Icon, name, path }) => (
            <div
              className="px-[3.5vw] sm:px-[1vw] py-[2vh] sm:py-[1.25vh] mx-[0.75vw] mt-[1vw] flex items-center cursor-pointer gap-[1vw]"
              key={id}
              onClick={() => handleNavigate(path)}
            >
              <span className="w-[4.5vw] sm:w-[1.8vw]">
                <Icon
                  size={"100%"}
                  color={isSelectedMenu(path) ? "#EF8157" : "#acacac"}
                />
              </span>
              <span
                className={`uppercase ${
                  isSelectedMenu(path)
                    ? "text-theme-orange"
                    : "text-primary-300"
                } text-[2vw] sm:text-[1vw]`}
              >
                {name}
              </span>
              {isSelectedMenu(path) && (
                <span className="h-[1.5vw] w-[1.5vw] bg-background-light border-b border-l transform rotate-45 absolute right-[-0.75vw] z-10"></span>
              )}
            </div>
          ))}
      </div>
      <div className="flex items-center gap-[1em] px-[2em] absolute bottom-[2.5vh] cursor-pointer">
        <IoRocketOutline color="#acacac" size={"1.8vw"} />
        <span className="text-primary-300 text-[0.85vw]">UPGRADE TO PRO</span>
      </div>
    </div>
  );
};

export default Sidebar;
