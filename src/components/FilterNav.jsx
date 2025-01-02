import { useContext } from "react";
import emailsPageDataContext from "../context/emailsPageDataContext";

const FilterNav = () => {
  const { currentFilter, setCurrentFilter, setCurrentEmail, currentEmail } =
    useContext(emailsPageDataContext);

  const handleFilterClick = (e) => {
    setCurrentFilter(e.target.innerHTML);
  };

  return (
    <nav className="flex gap-2 justify-between items-center">
      <div className="flex gap-2 items-center">
        <span className="text-textColor">Filter By:</span>
        <ul className="flex gap-2">
          {/* <li
            onClick={(e) => handleFilterClick(e)}
            className={`text-textColor  py-2 px-3 rounded-full cursor-pointer hover:bg-filterButtonColor transition-colors duration-200 ${
              currentFilter == "All Emails" ? "bg-filterButtonColor" : ""
            }`}
          >
            All Emails
          </li> */}
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
      </div>

      {currentEmail && (
        <button
          title="Close Email"
          onClick={() => setCurrentEmail(null)}
          className="border-2 text-white hover:text-textColor font-bold hover border-accesntColor px-2 py-0 rounded-md bg-accesntColor hover:bg-white transition-colors duration-200"
        >
          X
        </button>
      )}
    </nav>
  );
};

export default FilterNav;
