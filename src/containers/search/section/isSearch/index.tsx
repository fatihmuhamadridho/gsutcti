import PaginationMUI from "components/mui/pagination";
import BackdropMUI from "components/mui/backdrop";

const IsSearch = ({
  searchResult,
  paginationItems,
  pageQuery,
  navigateHandleChange,
}: any) => {
  return (
    <section className="space-y-[32px]">
      <div className="p-4 bg-secondary space-y-[20px]">
        {searchResult?.items?.map((item: any, index: any) => {
          return (
            <div className="border-b-[1px] cursor-pointer" key={index}>
                <BackdropMUI repo={item} />
                {/* {item.id} - {item.full_name} - {item.language} */}
            </div>
          );
        })}
      </div>
      <div className="p-4">
        <PaginationMUI
          paginationItems={paginationItems}
          pageQuery={pageQuery}
          navigateHandleChange={(e: any) => navigateHandleChange(e)}
        />
      </div>
    </section>
  );
};

export default IsSearch;
