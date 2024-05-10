import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const AppLayout: React.FC = () => {
  const [collapsible, setCollapsible] = useState<boolean>(false);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.screen.width <= 990) {
        setCollapsible(true);
        setSidebarVisible(false);
      } else {
        setCollapsible(false);
        setSidebarVisible(true);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return (
    <div className="flex h-screen">
      <Sidebar sidebarVisible={sidebarVisible} />
      <div className="bg-background-light flex-1 border-l overflow-y-auto no-scrollbar">
        <Header
          collapsible={collapsible}
          sidebarVisible={sidebarVisible}
          setSidebarVisible={setSidebarVisible}
        />
        <div className="p-[2vw]">
          <Outlet />
        </div>
        <div className="flex justify-between items-center my-[1vh] px-[1.5vw] py-[2vh]">
          <div className="flex items-center gap-[1em]">
            <span className="text-primary-600 text-sm">CREATIVE TIM</span>
            <span className="text-primary-600 text-sm">BLOG</span>
            <span className="text-primary-600 text-sm">LICENSES</span>
          </div>
          <div className="flex items-center text-sm text-primary-600">
            © 2024, made with <FaHeart className="mx-[0.25em]" color="#000" />
            by
            <span className="text-blue-400 cursor-pointer hover:underline ml-1">
              Creative Tim
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
