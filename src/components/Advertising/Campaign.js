import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import {columns,rows} from "../../Datas/tableDatas"
const Campaign = () => {
  return (
    <div className="p-7 border-2 bg-white">
      <h1 className="text-3xl font-extrabold text-left my-4">All Campaign</h1>
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
  );
};

export default Campaign;
