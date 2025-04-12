import { useEffect, useState } from "react";
import { BsGlobe, BsChevronDown } from "react-icons/bs";
import style from "./LanguageSwitcher.module.css";
import { useLanguage } from "../../context/LanguageProvider";

export const LanguageSwitcher = () => {
  const { language, updateLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showSwitcher, setShowSwitcher] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSwitcher(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lista de idiomas suportados
  const languages = {
    pt: "Português",
    en: "English",
    es: "Español",
  };

  return showSwitcher ? (
    <div className={style.container}>
      <div
        className={style.trigger}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        role="button"
        tabIndex={0}
      >
        <BsGlobe className={style.icon} />
        <span>{language.toUpperCase()}</span>
        <BsChevronDown className={style.chevron} />

        {isOpen && (
          <ul className={style.dropdown}>
            {Object.keys(languages).map(
              (lang) =>
                lang !== language && (
                  <li
                    key={lang}
                    onClick={() => updateLanguage(lang)}
                    onKeyDown={(e) => e.key === "Enter" && updateLanguage(lang)}
                    role="option"
                    tabIndex={0}
                  >
                    {languages[lang]}
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    </div>
  ) : null;
};
