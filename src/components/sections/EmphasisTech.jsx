/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react"; // Adicione estes imports
import Cards from "../cards/Cards";
import style from "./EmphasisTech.module.css";
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
import ScrollAnimation from "../scrollAnimationWrapper/ScrollAnimationWrapper";

const EmphasisTech = () => {
  const { language } = useLanguage();
  const cardsRef = useRef(null); // Referência para o container dos cards

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.visible);
          }
        });
      },
      { threshold: 0.1 } // Dispara quando 10% do elemento estiver visível
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  const cards = translations[language].home.card;

  return (
    <section id="serviceTech" className={style.container}>
      <div className={style.content}>
        <ScrollAnimation className={style.header}>
          <h2>{translations[language].home.services}</h2>
          <hr />
        </ScrollAnimation>

        {/* Adicione a ref e a classe animated aqui */}
        {/* <div ref={cardsRef} className={`${style.cards} ${style.animated}`}> */}
        <ScrollAnimation className={style.cards}>
          {cards.map((card) => (
            <Cards
              key={card.id}
              title={card.title}
              text={card.text}
              img={card.image}
              alt={card.alt}
              url=""
              buttonText={card.buttonText}
            />
          ))}
        </ScrollAnimation>

        <div className={style.buttonContainer}>
          <a
            href={translations[language].home.button.link}
            className={style.customButton}
            aria-label="Saiba mais sobre o conteúdo"
          >
            <span className={style.buttonLink}>
              {translations[language].home.button.label}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmphasisTech;
