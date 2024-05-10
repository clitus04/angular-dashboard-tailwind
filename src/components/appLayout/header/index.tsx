import { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { menuItems } from "../sidebar/sidebar.data";
import { CiSearch, CiGrid32 } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { RiMenu2Fill, RiCloseLargeFill } from "react-icons/ri";

interface Props {
  collapsible: boolean;
  sidebarVisible: boolean;
  setSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({
  collapsible,
  sidebarVisible,
  setSidebarVisible,
}) => {
  const location = useLocation();
  const title = useMemo(() => {
    const currentMenu = menuItems.find(
      (item) => item.path === location.pathname
    );
    return currentMenu?.name;
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setSidebarVisible(!sidebarVisible);
  }, [sidebarVisible]);
  return (
    <div className="h-[9vh] px-[2vw] flex justify-between items-center border-b bg-background-light z-10">
      <div className="flex items-center gap-[1.5vw] md:gap-[0.75vw]">
        {collapsible && (
          <div className="cursor-pointer w-[2.5vw] md:w-[1.5vw]" onClick={toggleMenu}>
            {sidebarVisible ? (
              <RiCloseLargeFill size={"100%"} color="#66615B" />
            ) : (
              <RiMenu2Fill size={"100%"} color="#66615B" />
            )}
          </div>
        )}
        <div className="text-[2vw] md:text-[1.35vw] text-primary-600">{title}</div>
      </div>
      <div className="flex items-center gap-[5vw] md:gap-[1vw] mr-[1.25vw]">
        <div className="flex items-center bg-primary-400 px-[0.75vw] py-[0.8vh] rounded-sm">
          <input
            placeholder="Search..."
            className="bg-transparent w-[25vw] md:w-[12vw] text-[1.25vw]"
          />
          <CiSearch size={"1.5vw"} />
        </div>
        <div className="flex gap-[1.75vw]">
          <CiGrid32 size={"1.5vw"} color="#66615B" />
          <div className="flex items-start">
            <IoIosNotificationsOutline size={"1.5vw"} color="#66615B" />
            <FaCaretDown size={"1vw"} color="#66615B" />
          </div>
          <HiOutlineCog8Tooth size={"1.5vw"} color="#66615B" />
        </div>
      </div>
    </div>
  );
};

export default Header;
