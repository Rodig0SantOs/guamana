import style from "./about.module.css";

import job from "../../img/job-equip.jpg";
/* import Cards from "../../components/cards/Cards"; */
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
const About = () => {
  const { language } = useLanguage();

  return (
    <section className={style.about}>
      <div className={style.container}>
        <div className="image-container">
          <img src={job} alt="Detective" />
        </div>
        <div className="text-overlay">
          <h1>{translations[language].about.about}</h1>
          <hr />
          <p>{translations[language].about.subtitle}</p>
        </div>

        {/* text about */}
        <div className={style.aboutText}>
          <div className={style.aboutTitle}>
            <h2>{translations[language].about.title}</h2>
            <hr />
          </div>
          {translations[language].about.teamText.map((p) => (
            <p key={p.id}>{p.description}</p>
          ))}
          <hr className={style.lines} />
        </div>
      </div>
    </section>
  );
};

export default About;
