// 
import React, { useContext } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InventoryIcon from '@mui/icons-material/Inventory';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CloseIcon from '@mui/icons-material/Close';
import menuContext from "./menuContext";

const Sidebar = () => {
  const { ismenuClicked, setmenuClick } = useContext(menuContext);

  const handleCloseSidebar = () => {
    setmenuClick(false);
  };

  return (
    <div className={`w-fit pt-20 fixed bg-white left-0 top-0 flex flex-col justify items-center h-[100vh] border-r-2 ${!ismenuClicked ? 'hidden' : ''}`}>
      <button className="close-btn absolute top-5 left-5" onClick={handleCloseSidebar}>
        <CloseIcon />
      </button>
      <div className="side-in">
        <DashboardIcon />
        <span>Dashboard</span>
      </div>
      <div className="side-in">
        <MenuBookIcon />
        <span>Catalog</span>
      </div>
      <div className="side-in">
        <InventoryIcon />
        <span>Inventory</span>
      </div>
      <div className="side-in">
        <BarChartIcon />
        <span>Charts</span>
      </div>
      <div className="side-in">
        <ShoppingCartIcon />
        <span> Advertising</span>
      </div>
      <div className="side-in">
        <CalendarMonthIcon />
        <span>Calendar</span>
      </div>
      <div className="side-in">
        <BusinessCenterIcon />
        <span>Report Centrals</span>
      </div>
      <div className="side-in">
        <DocumentScannerIcon />
        <span>Reports</span>
      </div>
      <div className="side-in">
        <GroupAddIcon />
        <span>Link Accounts</span>
      </div>
      <div className="side-in">
        <SettingsIcon />
        <span>Settings</span>
      </div>
      <div className="side-in">
        <HelpIcon />
        <span>Help</span>
      </div>
    </div>
  );
};

export default Sidebar;
