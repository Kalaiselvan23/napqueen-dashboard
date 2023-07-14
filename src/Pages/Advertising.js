import React, {useState } from 'react';
import Topbar from '../components/Advertising/Topbar';
import Sidebar from '../components/Advertising/Sidebar';
import Head from '../components/Advertising/Head';
import Graphs from "../components/Advertising/Graphs";
import Campaign from "../components/Advertising/Campaign";
import menuContext from '../components/Advertising/menuContext';

const Advertising = () => {
  const [ismenuClicked, setmenuClick] = useState(false);

  return (
    <menuContext.Provider value={{ ismenuClicked, setmenuClick }}>
      <div>
        <Topbar />
        <Head />
        <Graphs/>
        <Campaign />
        <Sidebar />
      </div>
    </menuContext.Provider>
  );
};

export default Advertising;
