/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Carroseul from "./components/Carroseul";
import CONST from "./data/Containes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import emitter from "./utils/eventEmitter";

export enum TitleType {
  Movie = "movie",
  Serie = "tv",
}
export interface Title {
  type: TitleType;
  id: string | number;
}
const App = () => {
  const { URL, APISTRING } = CONST;

  const [movie, setMovie] = useState({
    results: [],
  });
  const [series, setSeries] = useState({
    results: [],
  });

  const [title, setTitle] = useState();

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
    );
    const data = await response.json();
    setMovie(data);

    const series = await fetch(
      `${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`
    );
    const seriesData = await series.json();
    setSeries(seriesData);
    setLoading(false);
  };
  useEffect(() => {
    emitter.addListener(CONST.EVENTS.PosterClick, getTitle);
    emitter.addListener(CONST.EVENTS.ModalClose, setTitle);
    fetchData();
  }, []);
  const getMovieFeatured = () => movie && movie?.results[0];
  const getMovieList = () => {
    if (movie) {
      const [featured, ...movieList] = movie?.results;
      return movieList;
    }
    return [];
  };
  const getTitle = async ({ type, id }: Title) => {
    setLoading(true);
    const title = await fetch(
      `${URL}/${type}/${id}${APISTRING}&sort_by=popularity.desc`
    );
    const titleData = await title.json();
    setTitle(titleData);
    setLoading(false);
  };
  useEffect(() => title && console.log(title), [title]);
  return (
    <div className="m-auto antialised font-sans bg-gray-800 text-white">
      {loading && (
        <>
          <Loading />
          <NavBar />
        </>
      )}
      {!loading && (
        <>
          <Hero {...getMovieFeatured()} />
          <NavBar />
          <Carroseul title="Filmes em alta" data={getMovieList()} />
          <Carroseul title="Séries em alta" data={series?.results} />
          <Footer />
          {!loading && title && <Modal {...title} />}
        </>
      )}
    </div>
  );
};

export default App;
