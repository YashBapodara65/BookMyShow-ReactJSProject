import React, { createContext, useState } from "react";
import Logo from "../../public/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import SwiperSliderCom from "../components/SwiperSliderCom";

import SlickSliderCom from "./SlickSliderCom";

export const SearchFilterSorting = createContext();

function NavbarCom({ val, disp, sfs }) {
  const [visible, setVisible] = useState(false);

  const [search, setSearch] = useState("");
  const [selectGenres, setSelectGenres] = useState("");
  const [selectSortOrder, setSelectSortOrder] = useState("");

  return (
    <>
      <div className="hidden xl:block">
        <div className="grid items-center justify-center grid-cols-4">
          <div className="col-span-2 justify-center gap-10 py-2 flex items-center">
            <img src={Logo} alt="" />
            <form action="" className="w-[60%] relative">
              <input
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                className="w-[100%] outline-0 ps-10 py-1 border"
                placeholder="Search for Movies, Events, Plays, Sports And Activities"
              />
              <SearchIcon
                fontSize="small"
                className="absolute start-[4%] top-[50%] -translate-1/2"
              />
            </form>
          </div>
          <div className="col-span-2 flex items-center py-2 justify-center gap-10">
            <form action="">
              <select
                name=""
                id=""
                className="outline-0 border border-b-gray-800 focus:outline-0 px-2 py-1"
                defaultValue="Rajkot"
              >
                <option value="Rajkot">Rajkot</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Surat">Surat</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Gandhinagar">Gandhinagar</option>
              </select>
            </form>
            {sfs ? (
              <>
                <select
                  name=""
                  id=""
                  onChange={(e) => setSelectGenres(e.target.value)}
                  className="px-2 py-1 border border-b-gray-800 focus:outline-0 outline-0"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a Genres
                  </option>
                  <option value="All">All</option>
                  <option value="Drama">Drama</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Action">Action</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Family">Family</option>
                  <option value="Historical">Historical</option>
                  <option value="Horror">Horror</option>
                  <option value="Musical">Musical</option>
                  <option value="Sci-Fi">Sci</option>
                </select>
                <select
                  name=""
                  onChange={(e) => setSelectSortOrder(e.target.value)}
                  defaultValue=""
                  className="outlie-0 border border-b-gray-800 focus:outline-0 px-2 py-1"
                  id=""
                >
                  <option value="asc">Ascending Order</option>
                  <option value="desc">Descending Order</option>
                </select>
              </>
            ) : (
              ""
            )}
            {val != "home" ? (
              <Link
                to={"/"}
                className="bg-blue-500 text-white py-1 rounded-lg px-4"
              >
                Home
              </Link>
            ) : (
              <Link
                to={"/addForm"}
                className="bg-red-500 text-white py-1 rounded-lg px-4"
              >
                Add Movie
              </Link>
            )}
            <MenuIcon />
          </div>
        </div>
      </div>

      <div className="block xl:hidden">
        <div className="grid items-center gap-3 mb-3 relative justify-center grid-cols-1">
          <div className="col-span-1 justify-start px-5 gap-10 py-3 flex items-center">
            <img src={Logo} alt="" />
          </div>
          <MenuIcon
            className="absolute top-4 end-[4%]"
            onClick={() => setVisible(!visible)}
          />
          {visible ? (
            <>
              <div className="fixed z-10 w-full top-17 h-screen bg-white">
                <div className="col-span-1 px-5 py-3">
                  <form action="" className="w-[100%] relative">
                    <input
                      type="text"
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-[100%] outline-0 ps-10 py-1 border"
                      placeholder="Search for Movies, Events, Plays, Sports And Activities"
                      value={search}
                    />
                    <SearchIcon
                      fontSize="small"
                      className="absolute start-5 top-[50%] -translate-1/2"
                    />
                  </form>
                </div>
                <div className="col-span-1 flex flex-wrap items-center gap-10 px-5 py-3">
                  <form action="">
                    <select
                      name=""
                      id=""
                      className="outline-0 py-1 border border-t-0 border-s-0 border-e-0 px-3"
                      defaultValue="Rajkot"
                    >
                      <option value="Rajkot">Rajkot</option>
                      <option value="Ahmedabad">Ahmedabad</option>
                      <option value="Surat">Surat</option>
                      <option value="Vadodara">Vadodara</option>
                      <option value="Gandhinagar">Gandhinagar</option>
                    </select>
                  </form>
                  <select
                  name=""
                  id=""
                  onChange={(e) => setSelectGenres(e.target.value)}
                  className="px-2 py-1 border border-b-gray-800 focus:outline-0 outline-0"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a Genres
                  </option>
                  <option value="All">All</option>
                  <option value="Drama">Drama</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Action">Action</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Family">Family</option>
                  <option value="Historical">Historical</option>
                  <option value="Horror">Horror</option>
                  <option value="Musical">Musical</option>
                  <option value="Sci-Fi">Sci</option>
                </select>
                <select
                  name=""
                  onChange={(e) => setSelectSortOrder(e.target.value)}
                  defaultValue=""
                  className="outlie-0 border border-b-gray-800 focus:outline-0 px-2 py-1"
                  id=""
                >
                  <option value="asc">Ascending Order</option>
                  <option value="desc">Descending Order</option>
                </select>
                  {val != "home" ? (
                    <Link
                      to={"/"}
                      className="bg-blue-500 text-white py-1 rounded-lg px-4"
                    >
                      Home
                    </Link>
                  ) : (
                    <Link
                      to={"/addForm"}
                      className="bg-red-500 text-white py-1 rounded-lg px-4"
                    >
                      Add Movie
                    </Link>
                  )}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      {disp ? (
        <>
          <SwiperSliderCom />
          <SearchFilterSorting.Provider
            value={{ search, selectGenres, selectSortOrder }}
          >
            <SlickSliderCom />
          </SearchFilterSorting.Provider>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default NavbarCom;
