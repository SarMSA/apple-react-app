import { useGSAP } from "@gsap/react";
import { navLists } from "../constants";
import { appleImg, bagImg, menuIconImg, searchImg } from "../utils";
import { useState, useEffect } from "react";
import gsap from "gsap";
const Navbar = () => {
  const [active, setActive] = useState("open");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 640) {
        setActive("open");
      } else {
        setActive("close");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (active === "open") {
      gsap.to(".menuIcon", {
        y: 0,
        duration: 0.5,
        ease: "power2.inOut",
        opacity: 1,
      });
    } else {
      gsap.to(".menuIcon", {
        y: 100,
        duration: 0.5,
        ease: "power2.inOut",
        opacity: 0,
      });
    }
  }, [active]);
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-baseline relative">
      <nav className="flex justify-between w-full items-center screen-max-width ">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className={`flex flex-1 justify-center menuIcon `}>
          {navLists.map((nav) => (
            <div
              key={nav}
              className={`px-5 text-sm cursor-pointer text-gray hover:text-white transition-all `}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex  items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" width={18} />
          <img src={bagImg} alt="bag" width={18} />
        </div>
        {windowWidth < 640 ? (
          <img
            src={menuIconImg}
            alt="menu"
            className="w-[50px]"
            onClick={() => {
              active === "close" ? setActive("open") : setActive("close");
            }}
          />
        ) : (
          ""
        )}
      </nav>
    </header>
  );
};

export default Navbar;
