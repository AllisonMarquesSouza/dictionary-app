import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import Menu from "./Menu";
import { LuBookmarkPlus } from "react-icons/lu";
import { Link } from "react-router";

function Header() {
  const [isMenuOpen, setOpenMenu] = useState(false);

  return (
    <div className="flex justify-between relative">
      <div className=" flex flex-col w-40 gap-1 absolute left-2 top-2 ">
        <button
          type="button"
          className={`flex items-center gap-2 p-3 rounded-md   hover:cursor-pointer transition hover:bg-slate-900 dark:hover:bg-slate-100 dark:hover:text-slate-900 hover:text-slate-100 ${isMenuOpen ? "bg-slate-900 text-slate-50" : ""}`}
          onClick={() => setOpenMenu(!isMenuOpen)}
        >
          <IoMdMenu />
          <h2>Menu</h2>
        </button>
        {isMenuOpen && <Menu />}
      </div>
      <Link
        className="flex items-center gap-1 p-3 rounded-md  absolute right-2 top-2 hover:bg-slate-900 hover:text-slate-100  dark:hover:bg-slate-100 dark:hover:text-slate-900"
        to="/saved-words"
      >
        <LuBookmarkPlus className="text-2xl hover:cursor-pointer transition" />
        <span>Saved words</span>
      </Link>
    </div>
  );
}
export default Header;
