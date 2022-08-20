import AutoCompleteMUI from "components/mui/autocomplete";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="py-4 w-full bg-secondary text-[white] flex items-center justify-between mb:px-4 lg:px-6 xl:px-8">
      <Link to={"/"}>
        <div className="flex items-center space-x-[10px] cursor-pointer">
          <img src="./favicon.ico" width={33} height={33} />
          <h1 className="font-bold">GSUTCTI</h1>
        </div>
      </Link>
      {/* <input className="w-full p-[6px] bg-secondary text-[white] text-[14px] border-[1px] border-[#57606A] outline-none rounded-[4px] ease-in-out duration-300 placeholder:text-[white] focus:max-w-[280px] mb:max-w-[200px]" type="search" placeholder="Search or jump to..." /> */}
      <AutoCompleteMUI />
    </header>
  );
};

export default Navbar;
