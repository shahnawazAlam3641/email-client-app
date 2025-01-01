const FilterNav = () => {
  return (
    <nav className="flex gap-2 items-center">
      <span className="text-textColor">Filter By:</span>
      <ul className="flex gap-2">
        <li className="text-textColor  py-2 px-3 rounded-full cursor-pointer hover:bg-filterButtonColor transition-colors duration-200">
          Unread
        </li>
        <li className="text-textColor  py-2 px-3 rounded-full cursor-pointer hover:bg-filterButtonColor transition-colors duration-200 ">
          Read
        </li>
        <li className="text-textColor   py-2 px-3 rounded-full cursor-pointer hover:bg-filterButtonColor transition-colors duration-200">
          Favourites
        </li>
      </ul>
    </nav>
  );
};

export default FilterNav;
