/* eslint-disable import/no-anonymous-default-export */
const URL = "https://api.themoviedb.org/3";
const IMAGEAPI = "https://image.tmdb.org/t/p";
const API = "2ea33971203ff4eaf239cc5b6dd35403";
const APISTRING = `?api_key=${API}&language=pt-BR`;
const EVENTS = {
  PosterClick: "PosterClick",
  ModalClose: "ModalClose",
};

export default { URL, IMAGEAPI, API, APISTRING, EVENTS };
