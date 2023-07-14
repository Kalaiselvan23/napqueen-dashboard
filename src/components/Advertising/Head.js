import React from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const Head = () => {
  return (
    <div className="border-b-2 bg-white p-5">
      <p className="font-extrabold text-3xl text-left pl-5 mt-5">Advertising</p>
      <div className="flex justify-between px-5 items-center">
        <div className="select-div flex gap-10">
          <label for="maketPlace" className="input-label">
            <span className="text-left my-2">MarketPlace</span>
            <select id="marketPlace" className="border-2 outline-none bg-white">
              <option>Amazon977792</option>
              <option>Netflix98233</option>
              <option>Flipkart987792</option>
              <option>Disney97992</option>
            </select>
          </label>
          <label for="addType" className="input-label">
            <span className="my-2 text-left">Ad Type</span>
            <select id="addType" className="border-2 outline-none bg-white">
              <option>All</option>
              <option>Social Media</option>
              <option>Online Ad</option>
              <option>Direct Mail</option>
            </select>
          </label>
        </div>
        <div className="border-none">
          <p className="my-2 text-right">Date & Time</p>
          <label className="flex gap-3 border-2">
            <input type="date" className="outline-none"></input>
            <span>
              <CompareArrowsIcon />
            </span>
            <input type="date" className="outline-none"></input>
          </label>
          <p className="text-right text-sm p-2 text-gray-400">PST-Timezone</p>
        </div>
      </div>
    </div>
  );
};

export default Head;
