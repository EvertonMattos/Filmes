/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="mt-32 px-12 ">
      <div className="cursor-pointer text-center ">
        <FontAwesomeIcon
          className="mr-5 hover:text-black"
          icon={faTwitter}
          size="2x"
        />
        <FontAwesomeIcon
          className="mr-5 hover:text-black"
          icon={faFacebookSquare}
          size="2x"
        />
        <FontAwesomeIcon
          className="mr-5 hover:text-black"
          icon={faInstagram}
          size="2x"
        />
        <FontAwesomeIcon
          className="hover:text-black"
          icon={faYoutube}
          size="2x"
        />
      </div>

      <div className="grid grid-cols-4 gap-2 mt-5">
        <a href="#" className="hover:text-black">
          Idiomas é legendas
        </a>
        <a href="#" className="hover:text-black">
          Audiodescrição
        </a>
        <a href="#" className="hover:text-black">
          Centro de ajuda
        </a>
        <a href="#" className="hover:text-black">
          Cartão pré-pago
        </a>
        <a href="#" className="hover:text-black">
          Impresa
        </a>
        <a href="#" className="hover:text-black">
          Relação com investidores
        </a>
        <a href="#" className="hover:text-black">
          Carreiras
        </a>
        <a href="#" className="hover:text-black">
          Termos de uso
        </a>
        <a href="#" className="hover:text-black">
          Privacidade
        </a>
        <a href="#" className="hover:text-black">
          Aviso legais
        </a>
        <a href="#" className="hover:text-black">
          Preferência de cookies
        </a>
        <a href="#" className="hover:text-black">
          Informação corporativas
        </a>
        <a href="#" className="hover:text-black">
          Entre em contato
        </a>
      </div>
      <p className="text-center">© 1997 -{today.getFullYear()} ImaginFlix</p>
    </footer>
  );
};

export default Footer;
