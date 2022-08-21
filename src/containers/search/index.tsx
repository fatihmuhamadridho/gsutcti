import IsSearch from "./section/isSearch";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { TypedDispatch, RootState } from "redux/store";
import { useEffect, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import usePagination from "@mui/material/usePagination";

import LayoutPage from "containers/layout";
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
    page: Number(searchParams.get("page"))
  });
  const [prevParams, setPrevParams] = useState("");
  const [prevPagination, setPrevPagination] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if(prevParams !== searchParams?.get("q")) {
        setPrevParams(searchParams?.get("q"))
      }
      if(prevPagination !== searchParams?.get("page")) {
        setPrevPagination(searchParams?.get("page"))
      }

      console.log("prevParams", prevParams)
      console.log("prevPagination", prevPagination)

      if(prevParams === searchParams?.get("q") && prevPagination === searchParams?.get("page") ) {
        dispatch(getPageSearch({
          query: searchParams?.get("q"),
          page: searchParams?.get("page")
        }))
        setIsLoading(false)
      }
    }, 1400)
  }, [dispatch, prevPagination, prevParams, searchParams]);

  const navigateHandleChange = ({ page }: any) => {
    console.log("e", page);
    setIsLoading(true)
    navigate({
      search: createSearchParams({
        q: searchParams?.get("q"),
        page: String(page),
      }).toString(),
    });
  };

  // console.log("allState", allState);
  console.log("pagination", searchParams.get("page"))
  console.log("prevParams", prevParams)


  return (
    <LayoutPage>
      <div className="/mx-[103px]/ my-[24px]">
        {searchParams?.get("q")?.length > 0 ? (
          <div className="flex justify-center">
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
