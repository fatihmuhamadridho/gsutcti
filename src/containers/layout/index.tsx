import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { TypedDispatch, RootState } from "redux/store";
import { getSearch } from "redux/actions/search";
import { useState, useEffect } from "react";
import usePagination from "@mui/material/usePagination";

import Navbar from "components/core/navbar";

const LayoutPage = ({ children }: any) => {
  const dispatch: TypedDispatch = useDispatch();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const allState = selector((state: any) => state);

  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [prevSearchInput, setPrevSearchInput] = useState("");

  const { items } = usePagination({
    count: 100,
    boundaryCount: 2,
    siblingCount: 2,
  });
  const paginationNumber = items.find((item: any) => item.selected === true)

  useEffect(() => {
    setTimeout(() => {
      if (prevSearchInput !== searchInput) {
        console.log("not same");
        setPrevSearchInput(searchInput);
      }

      if (prevSearchInput.length > 0 && prevSearchInput === searchInput) {
        dispatch(getSearch({
          query: prevSearchInput,
          page: paginationNumber?.page
        }));
        setIsLoading(false);
      }

    //   if(allState.search.searchs === null) {
    //     dispatch(getPageSearch({
    //         query: prevSearchInput
    //     }))
    //   }
    }, 1600);

  }, [allState.search.searchs, dispatch, paginationNumber?.page, prevSearchInput, searchInput]);

  const searchHandleChange = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchInput(e.target.value);
  };

  console.log("allState", allState)

  return (
    <>
      <Navbar
        searchHandleChange={(e: any) => searchHandleChange(e)}
        searchInput={searchInput}
        isLoading={isLoading}
        allState={allState}
      />
      <div className="mb:px-4 lg:px-6 xl:px-8">
        {children}
      </div>
    </>
  );
};

export default LayoutPage;
