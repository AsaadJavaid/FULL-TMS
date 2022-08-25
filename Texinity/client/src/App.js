import { Button, Layout, Drawer } from "antd";
import "antd/dist/antd.min.css";
import "./index.css";
import SideNavBar from "./components/SideNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/attendance";
import Headercom from "./components/Header";
import Profile from "./pages/Profile/Profile";
import Employee from "./pages/Attendance/Employee";
import AddUser from "./pages/AddUser/AddUser";
import AddProject from "./pages/AddProject/AddProject";
import ViewUsers from "./pages/viewUsers";
import "antd/dist/antd.dark.css";
import ProjectDetails from "./pages/AddProject/ProjectDetails";
import EditModules from "./pages/AddProject/EditModules";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <SideNavBar />
        <Layout className="site-layout">
          <Headercom />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/attendance" element={<Employee />} />
            <Route path="/viewAttend" element={<Attendance />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/addProject" element={<AddProject />} />
            <Route path="/projectDetails" element={<ProjectDetails />} />
            <Route path="/editModule" element={<EditModules />} />
            <Route
              path="/viewUsers/employees"
              element={<ViewUsers type="employee" />}
            />
            <Route
              path="/viewUsers/internees"
              element={<ViewUsers type="internee" />}
            />
          </Routes>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
