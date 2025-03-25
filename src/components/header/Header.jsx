import {
  BsChevronDown,
  BsEnvelope,
  BsGlobe,
  BsHouse,
  BsInfoCircle,
  BsInstagram,
  BsLinkedin,
  BsList,
  BsPhoneVibrate,
  BsX,
} from "react-icons/bs";

// logo
import logo from "../../assets/logo.png";

import style from "./Header.module.css";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { language, updateLanguage } = useLanguage();

  const handleLanguageChange = (newLang) => {
    updateLanguage(newLang);
    setIsDropdownOpen(false);
  };

  const handleLogo = () => {
    navigate("/");
  };

  return (
    <header className={style.headerContainer}>
      <div className={style.containerHeader}>
        <img
          src={logo}
          alt="logo - Gumana Forensics Technologies"
          className={style.logo}
          onClick={handleLogo}
        />

        {/* Ícone do hambúrguer FORA do menu desktop */}
        <div
          className={style.mobileMenuIcon}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <BsList />
        </div>

        <nav className={style.nav}>
          {/* Menu desktop com nova classe */}
          <ul className={`${style.menu} ${style.desktopMenu}`}>
            <li
              className={style.dropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <BsGlobe />
              {language.toUpperCase()}
              <BsChevronDown />
              {isDropdownOpen && (
                <ul className={style.dropdownMenu}>
                  {Object.keys(translations).map(
                    (lang) =>
                      lang !== language && (
                        <li
                          key={lang}
                          onClick={() => handleLanguageChange(lang)}
                        >
                          {lang.toUpperCase()}
                        </li>
                      )
                  )}
                </ul>
              )}
            </li>
            {/*  <li>
              <BsSearch />
              <span className={style.srOnly}>
                {translations[language].header.search}
              </span>
            </li> */}
            <li
              className={style.mobileMenuIcon}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <BsList />
            </li>
          </ul>
        </nav>

        {/* Mobile Drawer Menu */}
        <div
          className={`${style.mobileMenu} ${
            isMobileMenuOpen ? style.open : ""
          }`}
        >
          <div>
            <button
              className={style.closeButton}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className={style.srOnlyIcon}>
                <BsX />
              </span>
              <p className={style.closeX}>Close</p>
            </button>
            <hr className={style.mobileMenuLine} />
            <ul>
              <li>
                <Link to="/">
                  <BsHouse />
                  {translations[language].header.home}
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BsInfoCircle />
                  {translations[language].header.about}
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <BsPhoneVibrate />
                  {translations[language].header.contact}
                </Link>
              </li>
              {/* <li>
                <Link to="/blog">
                  <BsRss />
                  {translations[language].header.blog}
                </Link>
              </li> */}
            </ul>
            {/* <a href="#" className={style.login}>
              {translations[language].login}
            </a> */}
            {/* Dropdown de seleção de idioma */}
            <li
              className={style.dropdown}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <BsGlobe />
              {language.toUpperCase()}
              <BsChevronDown />
              {isDropdownOpen && (
                <ul className={style.dropdownMenu}>
                  {Object.keys(translations).map(
                    (lang) =>
                      lang !== language && (
                        <li
                          key={lang}
                          onClick={() => handleLanguageChange(lang)}
                        >
                          {lang.toUpperCase()}
                        </li>
                      )
                  )}
                </ul>
              )}
            </li>
          </div>

          <div>
            <hr className={style.mobileMenuLine} />
            <ul className={style.socialMedia}>
              <li>
                <a href="#">
                  <BsLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a href="#">
                  <BsEnvelope /> Email
                </a>
              </li>
              <li>
                <a href="#">
                  <BsInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Drawer Menu */}

        {/* Fundo escuro ao abrir o menu mobile */}
        {isMobileMenuOpen && (
          <div
            className={style.overlay}
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
