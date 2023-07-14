import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Switch } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';

export const label = { inputProps: { 'aria-label': 'Switch demo' } };
export const columns = [
    { field: "status", headerName: "Status", width: 70,renderCell:(params)=>params.value==="pending"?<PauseCircleFilledIcon sx={{color:"gray"}}/>:(params.value==="completed")?<CheckCircleIcon sx={{color:"green"}}/>:<DeleteForeverIcon sx={{color:"red"}}/>,headerClassName:"bold-header" },
    { field: "campaignName", headerName: "Campaign Name", width: 130 ,renderCell:(params)=><div><span>{params.value}</span><CreateRoundedIcon sx={{color:"red",height:"20px",padding:"2px"}} /></div>},
    { field: "info", headerName: "Info", width: 130 },
    {
      field: "automation",
      headerName: "Automation",
      renderCell:(params)=>params.value?<Switch {...label} defaultChecked disabled />:<Switch {...label} disabled />,
      width: 90,
    },
    {
      field: "dayparting",
      headerName: "Dayparting",
      sortable: false,
      renderCell:(params)=>params.value?<Switch {...label} defaultChecked disabled />:<Switch {...label} disabled />,
      width: 120,
     },
     {
        field: "budget",
        headerName: "Budget",
        type: "string",
        width: 90,
      },
      {
        field: "biddingStrategy",
        headerName: "Bidding Strategy",
        cellClassName:"bidStrat",
        width: 120,
      },
      {
        field: "currentBid",
        headerName: "Current Bid",
        type: "icon",
        width: 90,
      },
      {
        field: "revenue",
        headerName: "Revenue",
        type: "icon",
        width: 90,
      },
      {
        field: "acos",
        headerName: "ACOS",
        type: "icon",
        width: 90,
      },
      {
        field: "impression",
        headerName: "Impressions",
        width: 100,
      },
      {
        field: "ctr",
        headerName: "CTR",
        type: "icon",
        width: 90,
      },
      {
        field: "convRate",
        headerName: "Conv Rate",
        type: "icon",
        width: 90,
      },
      {
        field: "report",
        headerName: "",
        width:90,
        cellClassName:"report"
      },
  ];
export const rows = [
    { id:1,campaignName:"Campaign1",status:"pending", campagnName: "Campaign2", info: "Additional info",automation:false,dayparting:false,budget:"$1500",biddingStrategy:"Up",currentBid:"$2.0",revenue:"$7099",acos:"298%",impression:"4.5k",ctr:"4.5k",convRate:"1.5%",report:"Report" },
    {id:2,campaignName:"Campaign2", status:"rejected", campagnName: "Campaign2", info: "Additional info",automation:true,dayparting:true,budget:"$1500",biddingStrategy:"Up",currentBid:"$2.0",revenue:"$7099",acos:"298%",impression:"4.5k",ctr:"4.5k",convRate:"1.5%",report:"Report" },
    {id:3,campaignName:"Campaign3", status:"completed", campagnName: "Campaign2", info: "Additional info",automation:true,dayparting:true,budget:"$1500",biddingStrategy:"Up",currentBid:"$2.0",revenue:"$7099",acos:"298%",impression:"4.5k",ctr:"4.5k",convRate:"1.5%",report:"Report" },
  ];
