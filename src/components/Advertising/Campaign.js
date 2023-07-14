import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import {columns,rows} from "../../Datas/tableDatas"
import DownloadIcon from '@mui/icons-material/Download';
const Campaign = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full p-5">
    <span className="text-2xl font-extrabold text-left">All Campaign</span>
    <div className="campaign-btns">
    <button><FilterListIcon/><span>Filter</span></button>
    <button><ViewColumnIcon/><span>Column</span></button>
    <button><DownloadIcon/><span>Download</span></button>
    </div>
    </div>
   
    <div className="p-7 border-2 bg-white">
      <div>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
    </div>
  );
};

export default Campaign;
