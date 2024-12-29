import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex justify-between w-full align-baseline screen-max-width ">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="max-sm:hidden flex flex-1 justify-center">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex  items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" width={18} />
          <img src={bagImg} alt="bag" width={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
