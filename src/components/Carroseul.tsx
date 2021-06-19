import React from "react";
import Slick from "react-slick";
import mockDate, { Movie } from "../data/mockData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Poster from "./Poster";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Carroseul.css";

interface CarroseulData {
  title?: string;
  data?: Movie[];
}

const Carroseul = ({
  title = "Filmes Em Destaque",
  data = mockDate,
}: CarroseulData) => {
  enum Direction {
    Left,
    Right,
  }
  const SlickArrow = ({
    direction,
    onClick,
  }: {
    direction: Direction;
    onClick?: () => {};
  }) => (
    <button
      type="button"
      className={`absolute w-16 h-5/6 z-10 bg-gray-800 bg-opacity-50 top-8 ${
        direction ? "right-0" : "left-0"
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={direction ? faChevronRight : faChevronLeft}
        size="2x"
      />
    </button>
  );
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <SlickArrow direction={Direction.Left} />,
    nextArrow: <SlickArrow direction={Direction.Right} />,
  };
  return (
    <section className="carroseul ">
      <h2 className="relative z-10 ml-8 text-3xl">{title}</h2>
      <Slick className="relative mb-8  " {...settings}>
        {data.map((item, index) => Poster(item, index))}
      </Slick>
    </section>
  );
};

export default Carroseul;
