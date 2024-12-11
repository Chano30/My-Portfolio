import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Dropdown from "./Dropdown";

const Navigator = () => {
  const [clicked, setClicked] = useState(false);
  const NAV_DATA = ["About", "Experience", "Project", "Contact"];

  const handleToggleButton = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setClicked(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`bg-blue absolute z-50 w-full ${
        clicked ? "" : "bg-transparent"
      }
      transition-all ease-in-out
      `}
    >
      <div className="mx-auto max-w-7xl px-2 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              onClick={handleToggleButton}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* <!--
                  Icon when menu is closed.

                  Menu open: "hidden", Menu closed: "block"
                --> */}
              {!clicked ? (
                <RxHamburgerMenu size={26} color="#FFF" />
              ) : (
                <RxCross1 size={26} color="#FFF" />
              )}

              {/* <!--
                  Icon when menu is open.

                  Menu open: "block", Menu closed: "hidden"
                --> */}
            </button>
          </div>
          <div className="flex shrink-0 items-center">
            <p className="text-3xl text-white">Portfolio</p>
          </div>
          <div className={`hidden sm:block`}>
            <div className="flex space-x-4">
              {NAV_DATA.map((value, index) => {
                return (
                  <a
                    key={index}
                    className="text-2xl text-white hover:bg-gray-700 cursor-pointer rounded-md px-3 py-2"
                    href=""
                  >
                    {value}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Dropdown 
        data={NAV_DATA}
        active={clicked}
        setActive={setClicked}
      />
    </nav>
  );
};

export default Navigator;
