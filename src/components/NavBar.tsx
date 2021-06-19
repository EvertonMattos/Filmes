import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import logo from "../assests/imagiflix.png";
import placeholderUser from "../assests/user.jpg";
import "../styles/NavBar.css";
const NavBar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const handleClick = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className="navbar absolute top-0 left-0 grid grid-cols-2 items-center w-full p-8">
      <div className="justify-self-start grid grid-cols-2 gap-4 items-center">
        <h1 className="hidden">ImagiFlix</h1>
        <img src={logo} alt="ImagiFlix" />
        <ul className="grid grid-cols-3 gap-4 ">
          <li className="font-bold">
            <a className="hover:text-black" href="#home">
              Inicio
            </a>
          </li>
          <li className="font-bold">
            <a href="#serie" className="hover:text-black">
              Serie
            </a>
          </li>
          <li className="font-bold">
            <a href="#filmes" className="hover:text-black">
              Filmes
            </a>
          </li>
        </ul>
      </div>

      <div className="justify-self-end flex justify-items-end items-center">
        <form className="relative w-64">
          <input
            className="w-full  bg-gray-800
           rounded py-2 px-4
           transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100"
            type="text"
            placeholder="Titulos, gente ou gênero"
          />
          <button
            className="absolute right-0 py-2 px-2"
            onClick={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>

        <div className=" relative flex ml-5">
          <img src={placeholderUser} alt="avatar" onClick={handleClick} />
          <button onClick={handleClick}>
            <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
          </button>
          <ul
            className={`absolute mt-10 top-0 right-0 w-32  bg-gray-800 rounded p-3         
           transition-all duration-500 ease-in-out 
           ${isMenu ? "" : "opacity-0 hidden"}`}
          >
            <li>
              <a onClick={handleClick} href="#myaccount">
                Minha Conta
              </a>
            </li>
            <li>
              <a onClick={handleClick} href="#loggout">
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
