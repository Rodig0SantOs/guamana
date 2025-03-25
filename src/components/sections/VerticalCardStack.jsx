import style from "./VerticalCardStack.module.css";
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
import TextFormatter from "../textFormatter/textFomatter";
import ScrollAnimation from "../scrollAnimationWrapper/ScrollAnimationWrapper";

const VerticalCardStack = () => {
  const { language } = useLanguage();
  const { cards } = translations[language].home.cardVertical;

  // Array com as chaves dos textos que queremos renderizar
  const textKeys = ['text', 'textp1', 'textp2'];

  return (
    <section className={style.container}>
      <ScrollAnimation className={style.content}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`${style.card} ${
              index % 2 === 0 ? style.cardEven : style.cardOdd
            }`}
          >
            <ScrollAnimation className={style.cardContent}>
              <h2>{card.title}</h2>
              
              {/* Mapeamento dos textos */}
              {textKeys.map((key) => (
                card[key] && (
                  <TextFormatter 
                    key={`${card.id}-${key}`} 
                    text={card[key]} 
                  />
                )
              ))}

              <div className={style.buttonContainer}>
                <a
                  href={card.link}
                  className={style.customButton}
                  aria-label="Saiba mais sobre o conteúdo"
                >
                  <span className={style.buttonLink}>{card.buttonText}</span>
                </a>
              </div>
            </ScrollAnimation>
            <img
              src={card.image}
              alt={card.title}
              className={style.cardImage}
            />
          </div>
        ))}
      </ScrollAnimation>
    </section>
  );
};

export default VerticalCardStack;