import { useContext } from "react";
import emailsPageDataContext from "../context/emailsPageDataContext";

const FilterNav = () => {
  const { currentFilter, setCurrentFilter } = useContext(emailsPageDataContext);

  const handleFilterClick = (e) => {
    setCurrentFilter(e.target.innerHTML);
  };

  return (
    <nav className="flex gap-2 items-center">
      <span className="text-textColor">Filter By:</span>
      <ul className="flex gap-2">
        <li
          onClick={(e) => handleFilterClick(e)}
          className={`text-textColor  py-2 px-3 rounded-full cursor-pointer hover:bg-filterButtonColor transition-colors duration-200 ${
            currentFilter == "Unread" ? "bg-filterButtonColor" : ""
          }`}
        >
          Unread
        </li>
        <li
          onClick={(e) => handleFilterClick(e)}
          className={`text-textColor  py-2 px-3 rounded-full cursor-pointer hover:bg-filterButtonColor transition-colors duration-200 ${
            currentFilter == "Read" ? "bg-filterButtonColor" : ""
          }`}
        >
          Read
        </li>
        <li
          onClick={(e) => handleFilterClick(e)}
          className={`text-textColor  py-2 px-3 rounded-full cursor-pointer hover:bg-filterButtonColor transition-colors duration-200 ${
            currentFilter == "Favourites" ? "bg-filterButtonColor" : ""
          }`}
        >
          Favourites
        </li>
      </ul>
    </nav>
  );
};

export default FilterNav;
