import React from "react";
import Chart  from "chart.js/auto";
import { TrendingDown, TrendingUpOutlined } from "@mui/icons-material";
import { Bar, Line } from "react-chartjs-2";
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const Getgraph = (graph) => {
  return (
    <div className="w-[35vw] border-2 p-5 bg-white">
      <div>
        <div className="flex justify-between w-full border-b-2 pb-3">
          <h2 className="font-extrabold text-lg">{graph.graphTitle}</h2>
          <div className="flex item-center gap-2">
          <select className="outine-none h-7">
            <option selected>Last 7 days</option>
            <option>Last 3 days</option>
            <option>Yesterday</option>
          </select>
          <FullscreenIcon/>
          </div>
        </div>
        <div className="flex gap-4 justify-between my-5">
        {graph.subDivs.map(getSubdiv)}
        </div>
        {graph.type==="line"?<Line data={graph.data} options={graph.options} />:<Bar data={graph.data} options={graph.options}/>}
      </div>
    </div>
  );
};

const getSubdiv=(item)=>{
  return <div className="flex flex-col">
            <span className="text-xs text-gray-500 text-left mb-2">{item.head}</span>
            <span className="font-extrabold">
              {item.value}
              <span className="w-10">
                {item.trend==="down"?<TrendingDown sx={{ color: "red",height:"20px" }} />:<TrendingUpOutlined sx={{color:"green",hieght:"20px"}}/>}
                <span className="font-thin text-xs">{item.percent}</span>
              </span>
            </span>
  </div>


}
export default Getgraph;
