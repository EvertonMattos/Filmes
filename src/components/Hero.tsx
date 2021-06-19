import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import CONST from "../data/Containes";
import Score from "./Score";
import placeholder from "../assests/hero.jpg";

const Hero = ({
  backdrop_path = null,
  title = "Os Vingadores Ultimatos",
  vote_average = 9,
}) => {
  const { IMAGEAPI } = CONST;
  return (
    <header className="box-border relative min-h-screen -mb-32">
      <img
        className="object-cover object-center h-auto w-full"
        src={
          backdrop_path ? `${IMAGEAPI}/original/${backdrop_path}` : placeholder
        }
        alt="Filmes em destaques"
      />
      <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-gray-800"></div>
      <article className="absolute bottom-0 mb-64 px-8">
        <p className="text-4xl pb-7">Assista agora</p>
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-base pt-4">
          Nota: <Score value={vote_average} />
        </p>
        <button className="text-base mx-3 mt-8 py-2 px-8  rounded bg-black bg-opacity-50 hover:bg-white transition-all duration-500 ease-in-out hover:bg-opacity-50 hover:text-black">
          <FontAwesomeIcon icon={faPlay} className="mr-2" />
          Assistir
        </button>
        <button className="text-base py-2 px-6 rounded bg-black bg-opacity-50 hover:bg-white transition-all duration-500 ease-in-out hover:bg-opacity-50 hover:text-black">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Minha Lista
        </button>
      </article>
    </header>
  );
};

export default Hero;
