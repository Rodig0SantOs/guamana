import { useEffect, useState } from "react";
import style from "./Back.module.css";
import { BsArrowUp } from "react-icons/bs";

const Back = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return isVisible ? (
    <button
      className={style.button}
      onClick={scrollToTop}
      aria-label="Voltar ao top"
    >
      <BsArrowUp className={style.icon} />
    </button>
  ) : null;
};

export default Back;
