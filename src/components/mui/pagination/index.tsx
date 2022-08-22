import * as React from "react";
import { styled } from "@mui/material/styles";


const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function PaginationMUI({
  paginationItems,
  navigateHandleChange,
}: any) {
  // console.log("paginationItems", paginationItems);

  return (
    <nav className="w-full flex items-center justify-center">
      <List className="w-full flex justify-between space-x-[10px]">
        {paginationItems?.map(
          ({ page, type, selected, ...item }: any, index: any) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = (<div className="mb:hidden sm:block">...</div>)
            } else if (type === "page") {
              children = (
                <button
                  className={`mb:hidden sm:block px-[10px] py-[5px] text-[14px] border-[1px] ${
                    selected ? "border-[white]" : "border-primary"
                  } hover:border-[white]`}
                  type="button"
                  style={{
                    fontWeight: selected ? "bold" : undefined,
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button
                  className="px-[10px] py-[5px] text-[14px] capitalize border-[1px] border-primary cursor-pointer hover:border-[white] mb:text-[18px]"
                  type="button"
                  {...item}
                >
                  {type}
                </button>
              );
            }

            return <li key={index} onClick={(e: any) => navigateHandleChange({ page: page })}>{children}</li>;
          }
        )}
      </List>
    </nav>
  );
}
