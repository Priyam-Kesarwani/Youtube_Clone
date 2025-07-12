import { AiOutlineMenu } from "react-icons/ai";
import logo from "../logo.png";
import profile from "../DP.png";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";
import { IoIosSearch } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchbar, setSearchBar] = useState(false);
  const [darkMode, setDarkMode] = useState("light");

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navigate = useNavigate();
  const searchQueryHandler = (e) => {
    if (
      (e?.key === "Enter" || e === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    } else {
      setIsSidebar(!isSidebar);
    }
  };

  if (searchbar) {
    return (
      <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center dark:bg-gray-800 dark:text-white">
        <IoArrowBack
          size={20}
          onClick={() => setSearchBar(false)}
          className="cursor-pointer"
        />
        <div className="flex items-center flex-grow mx-4">
          <div className="w-[100%] px-4 py-2 rounded-l-full border-[1px] border-gray-400">
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2 border-[1px] border-gray-400 rounded-r-full bg-gray-100"
            onClick={() => searchQueryHandler("searchButton")}
            aria-label="Search"
          >
            <CiSearch size={"24px"} />
          </button>
        </div>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
          onClick={() => setSearchBar(false)}
        />
      </div>
    );
  }

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 dark:bg-gray-800 dark:text-white">
      <div className="flex items-center space-x-4 ">
        <AiOutlineMenu
          className="text-xl cursor-pointer"
          onClick={handleSidebar}
        />
        <img
          src={logo}
          alt="Logo"
          className="w-28 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="hidden md:flex w-[35%]  items-center">
        <div className="w-[100%] px-4 py-2 rounded-l-full border border-gray-400">
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-400 rounded-r-full bg-gray-100 dark:bg-gray-700 dark:text-white"
          onClick={() => searchQueryHandler("searchButton")}
          aria-label="Search"
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200  "
        />
        <button
          onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")}
          className="ml-4 text-xl"
          aria-label="Toggle dark mode"
        >
          {darkMode === "dark" ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
      </div>
      <div className="flex space-x-5 items-center">
        <IoIosSearch
          className="text-2xl md:hidden "
          onClick={() => setSearchBar(!searchbar)}
        />
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <img
          src={profile}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Navbar;
