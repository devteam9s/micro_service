import "./sidebar.scss";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import TaskIcon from '@mui/icons-material/Task';
import StarsIcon from '@mui/icons-material/Stars';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TuneIcon from '@mui/icons-material/Tune';
const Sidebar = () => {
  return (
    <div className="sidebar">
       <div className="top">
          <span className="logo">Vinayak Bhat</span>
       </div>
       <hr/>
       <div className="center">
          <ul> 
               <p className="title">MAIN</p>
            <li>
              <SpaceDashboardIcon className="icon"/>
              <span>Dashboard</span>
            </li>
               <p className="title">LISTS</p>
            <li>
              <PropaneTankIcon className="icon"/>
              <span>Overview</span>
            </li>
            <li>
              <TaskIcon className="icon"/>
              <span>Task Progress</span>
            </li>
            <li>
              <StarsIcon className="icon"/>
              <span>Milestones</span>
            </li>
            <li>
              <SpatialTrackingIcon className="icon"/>
              <span>Risk And Issue Tracking</span>
            </li>
                <p className="title">SERVICES</p>
            <li>
              <SummarizeIcon className="icon"/>
              <span>Communication and Reporting</span>
            </li>
            <li>
              <TuneIcon className="icon"/>
              <span>Customization and Filters</span>
            </li>
                <p className="title">USER</p>
            <li>
              <AccountBoxRoundedIcon className="icon"/>
              <span>Profie</span>
            </li>
            <li>
              <CircleNotificationsIcon className="icon"/>
              <span>Notifications</span>
            </li>
            <li>
              <SettingsIcon className="icon"/>
              <span>Settings</span>
            </li>
            <li>
              <LogoutIcon className="icon"/>
              <span>Logout</span>
            </li>
          </ul>
           
       </div>
       <div className="bottom">
          <div className="coloroption"></div>
          <div className="coloroption"></div>
          <div className="coloroption"></div>
       </div>
    </div>
  );
};

export default Sidebar