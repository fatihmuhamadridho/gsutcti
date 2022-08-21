import AutoCompleteMUI from "components/mui/autocomplete";
import { Link } from "react-router-dom";

const Navbar = ({
  searchHandleChange,
  searchInput,
  isLoading,
  allState,
}: any) => {
  return (
    <nav className="py-4 w-full bg-secondary text-[white] flex items-center justify-between mb:px-4 mb:flex-col mb:space-y-[15px] sm:flex-row sm:space-y-[0px] lg:px-6 xl:px-8">
      <Link to={"/"}>
        <div className="flex items-center space-x-[10px] cursor-pointer">
          <img src="/favicon.ico" alt="" width={33} height={33} />
          <h1 className="font-bold">GSUTCTI</h1>
        </div>
      </Link>
      <AutoCompleteMUI
        searchHandleChange={(e: any) => searchHandleChange(e)}
        searchInput={searchInput}
        isLoading={isLoading}
        allState={allState}
      />
    </nav>
  );
};

export default Navbar;
