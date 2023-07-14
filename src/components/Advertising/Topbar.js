import React, { useContext } from 'react';
import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import menuContext from './menuContext';

const Topbar = () => {
  const { ismenuClicked, setmenuClick } = useContext(menuContext);

  const handleMenuClick = () => {
    setmenuClick(!ismenuClicked);
  };

  return (
    <div className='h-16 border-b-2 w-full flex justify-between px-4 items-center z-0 bg-white fixed top-0'>
      <button onClick={handleMenuClick}>
        <MenuIcon />
      </button>
      <div className="justify-self-end mr-5">
        <Avatar>A</Avatar>
      </div>
    </div>
  );
};

export default Topbar;
