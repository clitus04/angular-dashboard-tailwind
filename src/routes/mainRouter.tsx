import { Routes, Route } from "react-router-dom";
import AppLayout from "../components/appLayout";
import Dashboard from "../modules/dashboard";
import Dummy from "../components/appLayout/dummy";
import Maps from "../modules/maps";
import Notifications from "../modules/notifications";
import UserProfile from "../modules/userProfile";
import TableList from "../modules/tableList";
import Typography from "../modules/typography";

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/table" element={<TableList />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="*" element={<Dummy />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
