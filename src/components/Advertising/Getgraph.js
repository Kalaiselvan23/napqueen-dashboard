import React from "react";
import { TrendingDown, TrendingUpOutlined } from "@mui/icons-material";
import { Bar, Line } from "react-chartjs-2";
const options = {
  scales: {
    y: {
      ticks: {
        callback: (value) => `$${value}`,
      },
    },
  },
};
const Getgraph = (graph) => {
  return (
    <div className="w-[30vw] border-2 p-5 bg-white">
      <div>
        <div className="flex justify-between w-full border-b-2 pb-3">
          <h2 className="font-semibold">{graph.graphTitle}</h2>
          <select className="outine-none h-5">
            <option>Last 7 days</option>
            <option>Last 3 days</option>
            <option>Yesterday</option>
          </select>
        </div>
        <div className="flex gap-4 justify-between my-5">
        {graph.subDivs.map(getSubdiv)}
        </div>
        {graph.type==="line"?<Line data={graph.data} options={options}/>:<Bar data={graph.data} options={options} />}
      </div>
    </div>
  );
};

const getSubdiv=(item)=>{
  return <div className="flex flex-col">
            <span className="text-xs">{item.head}</span>
            <span className="font-semibold">
              {item.value}
              <span>
                {item.trend==="down"?<TrendingDown sx={{ color: "red",height:"20px" }} />:<TrendingUpOutlined sx={{color:"green",hieght:"20px"}}/>}
                <span className="font-thin text-xs">{item.percent}</span>
              </span>
            </span>
  </div>


}
export default Getgraph;
