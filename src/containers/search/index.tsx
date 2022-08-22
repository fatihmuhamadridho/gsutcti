import IsSearch from "./section/isSearch";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { TypedDispatch, RootState } from "redux/store";
import { useEffect, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import usePagination from "@mui/material/usePagination";

import LayoutPage from "containers/layout";
import SelectMUI from "components/mui/select";
import { getPageSearch } from "redux/actions/search";

const SearchPage = () => {
  const [searchParams]: any = useSearchParams();
  const dispatch: TypedDispatch = useDispatch();
  const selector: TypedUseSelectorHook<RootState> = useSelector;
  const allState = selector((state: any) => state);
  const navigate = useNavigate();

  const { items } = usePagination({
    count: 100,
    boundaryCount: 2,
    siblingCount: 2,
    page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [rowSelect, setRowSelect] = useState(Number(searchParams?.get("per_page")));
  const [prevParams, setPrevParams] = useState("");
  const [prevPagination, setPrevPagination] = useState("1");
  const [prevPerPage, setPrevPerPage] = useState(rowSelect);

  useEffect(() => {
    document.title = `Search * ${searchParams.get("q")}`;

    setRowSelect(Number(searchParams?.get("per_page") || 5))

    setTimeout(() => {
      if (prevParams !== searchParams?.get("q")) {
        setPrevParams(searchParams?.get("q"));
      }
      if (prevPagination !== searchParams?.get("page")) {
        setPrevPagination(searchParams?.get("page"));
      }
      if (prevPerPage !== rowSelect) {
        console.log("prevPerPage", prevPerPage)
        setPrevPerPage(rowSelect);
      }

      if (
        prevParams === searchParams?.get("q") &&
        prevPagination === searchParams?.get("page") &&
        prevPerPage === rowSelect
      ) {
        dispatch(
          getPageSearch({
            query: searchParams?.get("q"),
            page: searchParams?.get("page"),
            per_page: searchParams.get("per_page"),
          })
        );
        setIsLoading(false);
      }
    }, 1000);
  }, [dispatch, prevPagination, prevParams, prevPerPage, rowSelect, searchParams]);

  const navigateHandleChange = ({ page }: any) => {
    console.log("e", page);
    setIsLoading(true);
    navigate({
      search: createSearchParams({
        q: searchParams?.get("q"),
        page: String(page),
        per_page: searchParams.get("per_page") || "5",
      }).toString(),
    });
  };

  const rowSelectHandleChange = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setRowSelect(e.target.value);
    navigate({
      search: createSearchParams({
        q: searchParams?.get("q"),
        page: searchParams.get("page") || "1",
        per_page: e.target.value
      }).toString()
    })
  };

  // console.log("pagination", searchParams.get("page"));
  // console.log("prevParams", prevParams);

  return (
    <LayoutPage>
      <div className="/mx-[103px]/ my-[24px]">
        {searchParams?.get("q")?.length > 0 ? (
          <div className="w-full flex flex-col items-center space-y-[20px]">
            <div className="w-full max-w-[800px] flex items-center justify-between">
              <h1>
                {allState?.search?.searchs?.total_count} repository result
              </h1>
              <SelectMUI
                rowSelect={rowSelect}
                setRowSelect={(e: any) => setRowSelect(e)}
                rowSelectHandleChange={(e: any) => rowSelectHandleChange(e)}
              />
            </div>
            <div className="w-full max-w-[800px]">
              {!isLoading && !allState.search.searchs !== null ? (
                <IsSearch
                  searchResult={allState?.search?.searchs}
                  paginationItems={items}
                  pageQuery={searchParams.get("q")}
                  navigateHandleChange={(e: any) => navigateHandleChange(e)}
                />
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        ) : (
          <h1>Search more than 96M users</h1>
        )}
      </div>
    </LayoutPage>
  );
};

export default SearchPage;
