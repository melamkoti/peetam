import { NavLink } from "react-router-dom";
import LogoImg from "../../../assets/images/footer-logo.svg";
import NavListComp from "./NavListComp";
import { Example } from "./Example.tsx";

export default function Navbar() {
  return (
    <div className="w-screen relative flex justify-center items-center">
      <nav
        className="shadow-xl backdrop-blur-md bg-[#080808] bg-opacity-70 fixed top-0 left-0 text-white w-[100%] text-sm p-0 m-0 flex justify-between items-center py-5 md:px-2 md:pr-8"
      >
        <NavLink to="/">
          <div className="flex items-center justify-center">
            <div>
              <img src={LogoImg} className="w-10 md:w-16" alt="pic4" />
            </div>
          </div>
        </NavLink>
        <div className="flex justify-center items-center">
          <div className="flex jusity-center items-center md:hidden">
            <Example />
          </div>
          <div className="hidden md:flex">
            <NavListComp />
          </div>
        </div>
      </nav>
    </div>
  );
}
