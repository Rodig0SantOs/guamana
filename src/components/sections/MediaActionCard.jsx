import style from "./MediaActionCard.module.css";
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
import { useNavigate } from "react-router-dom";
import ScrollAnimation from "../scrollAnimationWrapper/ScrollAnimationWrapper";

const MediaActionCard = () => {
  const { language } = useLanguage();

  const t = translations[language];

  const navigate = useNavigate();

  return (
    <section className={style.mediaActionCard}>
      <div className={style.container}>
        <ScrollAnimation className={style.header}>
          <h2>{t.home.mediaActionCard.title}</h2>
          <hr />
        </ScrollAnimation>

        <ScrollAnimation className={style.content}>
          <img src={t.home.mediaActionCard.image} alt="detetive" />
          <div className={style.text}>
            <h2>{t.home.mediaActionCard.subtitle}</h2>
            <p>{t.home.mediaActionCard.text}</p>
            <button
              className={style.button}
              onClick={() => navigate("/contact#contact")}
            >
              {t.home.mediaActionCard.buttonText}
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MediaActionCard;
