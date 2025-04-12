import { useEffect, useState } from "react";
import { BsGlobe, BsChevronDown } from "react-icons/bs";
import styles from "./language.module.css";
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
    <div className={styles.container}>
      <div
        className={styles.trigger}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        role="button"
        tabIndex={0}
      >
        <BsGlobe className={styles.icon} />
        <span>{language.toUpperCase()}</span>
        <BsChevronDown className={styles.chevron} />

        {isOpen && (
          <ul className={styles.dropdown}>
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
