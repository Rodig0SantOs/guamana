import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
import ScrollAnimation from "../scrollAnimationWrapper/ScrollAnimationWrapper";
import style from "./CallToAction.module.css";

import { useNavigate } from "react-router-dom"; // Importar o useNavigate para navegação

const CallToAction = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Implementar a ação do botão
    console.log("Botão clicado!");

    navigate("/contact#contact");
  };

  const { language } = useLanguage(); // Corrigido: use "language" em vez de "laguage"

  const t = translations[language]; // Agora está acessando a variável correta

  return (
    <section className={style.container}>
      <ScrollAnimation className={style.content}>
        <h2>{t.home.callToAction.title}</h2>
        <p>{t.home.callToAction.text}</p>
        <ScrollAnimation>
          <button onClick={handleButtonClick} className={style.button}>
            {t.home.callToAction.button.label}{" "}
            {/* Use a tradução para o botão */}
          </button>
        </ScrollAnimation>
      </ScrollAnimation>
    </section>
  );
};

export default CallToAction;
