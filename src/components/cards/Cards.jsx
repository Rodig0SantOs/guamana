/* eslint-disable react/prop-types */
import style from "./Cards.module.css";
import { BsChevronRight } from "react-icons/bs";

const Cards = ({ title, text, img, alt, url, buttonText }) => {
  return (
    <div className={style.card}>
      <div className={style.content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <img src={img} alt={alt} className={style.cardImage} />
      <div className={style.actions}>
        <div className={style.icon}>
          <BsChevronRight />
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={style.link}
          aria-label={`${buttonText}: ${title}`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Cards;
