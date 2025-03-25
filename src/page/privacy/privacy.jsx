import style from "./privacy.module.css";

import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
import TextFormatter from "../../components/textFormatter/textFomatter";

const Privacy = () => {
  const { language } = useLanguage();
  const privacyContent = translations[language].privacy;

  return (
    <section className={style.about}>
      <div className={style.container}>
        <div className={style.aboutText}>
          <div className={style.aboutTitle}>
            <h2>{privacyContent.title}</h2>
            <p>{privacyContent.subtitle}</p>
            <hr />
          </div>

          {privacyContent.informacoes.map((item) => (
            <div key={item.id} className={style.infoItem}>
              {item.title && <h3 className={style.infoTitle}>{item.title}</h3>}
              <TextFormatter text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Privacy;
