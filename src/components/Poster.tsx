import React from "react";
import { Movie } from "../data/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import CONST from "../data/Containes";
import emitter from "../utils/eventEmitter";
import { TitleType, Title } from "../App";
import "../styles/Poster.css";
import Score from "./Score";
const { IMAGEAPI } = CONST;

const Poster = (
  { cover, poster_path, title, name, vote_average, id }: Movie,
  index: number
) => {
  const handleClick = () => {
    const type = id ? TitleType.Movie : TitleType.Serie;
    emitter.emit(CONST.EVENTS.PosterClick, { type, id });
  };
  return (
    <article
      className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
      key={index}
      onClick={handleClick}
    >
      <img
        src={poster_path ? `${IMAGEAPI}/w200/${poster_path}` : cover}
        alt={title}
      />
      <div className="poster cursor-pointer absolute inset-0 w-full h-full py-8 px-4 grid place-items-center bg-gray-800 text-center leading-6 bg-opacity-75 transition-all duration-500 ease-in-out opacity-0 ">
        <FontAwesomeIcon icon={faPlayCircle} size="4x" />
        <h2 className="text-2xl">{title ? title : name}</h2>
        <Score value={vote_average} />
      </div>
    </article>
  );
};

export default Poster;
