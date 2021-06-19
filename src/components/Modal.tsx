import React from "react";
import CONST from "../data/Containes";
import Score from "../components/Score";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import emitter from "../utils/eventEmitter";
const Modal = ({
  poster_path,
  title,
  name,
  original_name,
  original_title,
  overview,
  number_of_seasons,
  vote_average,
  runtime,
  video,
}: any) => {
  const { IMAGEAPI } = CONST;
  const handeClick = () => {
    emitter.emit(CONST.EVENTS.ModalClose);
  };
  return (
    <div className="fixed top-0 left-0 z-10 p-36 w-full h-screen grid place-items-center">
      <article className="w-full h-full grid grid-flow-col p-8 bg-black shadow-lg opacity-90">
        <img
          className="w-4/5 h-full"
          src={`${IMAGEAPI}/w500/${poster_path}`}
          alt={title ? title : name}
        />
        <div className="relative">
          <FontAwesomeIcon
            className="cursor-pointer absolute top-0 right-0 text-red-600"
            icon={faTimesCircle}
            size="2x"
            onClick={handeClick}
          />
          <h2 className="text-3xl font-bold">{title ? title : name}</h2>
          <h6 className="font-bold italic">
            {original_title ? original_title : original_name}
          </h6>
          <p className="my-8">{overview}</p>
          <Score value={vote_average} />
          <span className="bg-red-600 rounded py-2 px-4 ml-2">
            {runtime ? `${runtime}min` : `${number_of_seasons} temporadas`}
          </span>
        </div>
      </article>
    </div>
  );
};

export default Modal;
