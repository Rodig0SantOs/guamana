import style from "./blog.module.css";

// Img
import blogImg from "../../img/detective.jpg";

// Icon
import { BsChevronRight, BsShareFill } from "react-icons/bs";

// Components
import CallToAction from "../../components/sections/CallToAction";
import MediaActionCard from "../../components/sections/MediaActionCard";
import Cards from "../../components/cards/Cards";
import { translations } from "../../utils/translations";
import { useLanguage } from "../../context/LanguageProvider";

const Blog = () => {
  const { language } = useLanguage();

  const cards = [
    {
      id: 1,
      title: "01 Card Title",
      text: "simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy.",
      image: blogImg,
    },
  ];

  return (
    <section className={style.contact}>
      <div className={style.container}>
        <div className="image-container">
          <img src={blogImg} alt="Detective" />
        </div>
        <div className="text-overlay">
          <h1>{translations[language].blog.title}</h1>
          <hr />
          <p>{translations[language].blog.subtitle}</p>
        </div>

        {/* text about */}
        <div className={style.contactText}>
          <div className={style.contactTitle}>
            <h2>{translations[language].blog.titlePost}</h2>
            <hr />
          </div>

          {/* news blog on cards */}
          <div className={style.newsBlog}>
            <div className={style.content}>
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`${style.card} ${
                    index % 2 === 0 ? style.cardEven : style.cardOdd
                  }`}
                >
                  <article className={style.cardContent}>
                    <div>
                      {/* data de post */}
                      <section className={style.date}>
                        <p>autor</p>
                        <p>01 de Janeiro de 2022</p>
                      </section>
                      <h2>{card.title}</h2>
                      <p>{card.text}</p>
                    </div>
                    <div>
                      <hr />
                      <div className={style.buttonContainer}>
                        <section className={style.leftSection}>
                          <div className={style.icon}>
                            <BsChevronRight />
                          </div>
                          <a
                            href="https://www.exemplo.com"
                            className={style.buttonLink}
                          >
                            Saiba mais
                          </a>
                        </section>
                        <section className={style.rightSection}>
                          <BsShareFill />
                        </section>
                      </div>
                    </div>
                  </article>
                  <img src={card.image} alt="" />
                </div>
              ))}
            </div>
          </div>

          <hr className={style.lines} />
          <div className={style.cards}>
            <Cards
              title="teste"
              text="simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy."
              img={blogImg}
              url="https://google.com/"
            />
            <Cards
              title="teste"
              text="simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy."
              img={blogImg}
            />
            <Cards
              title="teste"
              text="simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy."
              img={blogImg}
            />
            <Cards
              title="teste"
              text="simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy."
              img={blogImg}
            />
            <Cards
              title="teste"
              text="simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy."
              img={blogImg}
            />
            <Cards
              title="teste"
              text="simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy."
              img={blogImg}
            />
            <Cards
              title="teste"
              text="simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy."
              img={blogImg}
            />
            <Cards
              title="teste"
              text="simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy."
              img={blogImg}
            />
            <Cards
              title="teste"
              text="simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy text of the printing and typesetting industry printing and typesetting industry simply dummy."
              img={blogImg}
            />
          </div>
        </div>
      </div>
      <CallToAction />
      <MediaActionCard />
    </section>
  );
};

export default Blog;
