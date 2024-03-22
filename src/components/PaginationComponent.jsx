"user client";

import { Stack, ThemeProvider, createTheme, Pagination, PaginationItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";



const PaginationComponent = ({ data ,currentPage ,itemsPerPage ,handlePageChange}) => {

  const theme = createTheme({
    palette: { primary: { main: "#000", contrastText: "#EEE" } },
  });


  return (
    <div>
      <ThemeProvider theme={theme}>
        <Stack direction="row" justifyContent="center" marginTop={2}>
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            renderItem={(item) => (
              <PaginationItem
              components={{
                previous: (props) => <button {...props} className="!border-2 p-[4px] hover:bg-[#119DED] rounded-tl-2xl hover:border-[#119DED] bg-[#119DED]"><GrFormPrevious size={30} /></button>,
                next: (props) => <button {...props} className="border-2 p-[4px] hover:bg-[#119DED] rounded-br-2xl hover:border-[#119DED] bg-[#119DED]" ><MdNavigateNext size={30} /></button>,
              }}
              style={{ display: item.type === "page" ? "none" : "block" }} 
              {...item}
            />
            )}
  
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default PaginationComponent;
