/* eslint-disable react/prop-types */
import style from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { BsEnvelope, BsInstagram, BsLinkedin } from "react-icons/bs";
import { translations } from "../../utils/translations";
import { useLanguage } from "../../context/LanguageProvider";

const Footer = () => {
  const { language } = useLanguage();

  const socialLinks = [
    { icon: <BsLinkedin />, url: "#" },
    { icon: <BsEnvelope />, url: "#" },
    { icon: <BsInstagram />, url: "#" },
  ];

  const menuItems = [
    { label: "Home", url: "/" },
    { label: translations[language].footer.about, url: "/about" },
    { label: translations[language].footer.contact, url: "/contact" },
  ];

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.grid}>
            <AboutSection logo={logo} />
            <MenuSection title="Menu" items={menuItems} />
            <Sociallinks socialLinks={socialLinks} />
          </div>
          <CopyrightNotice />
        </div>
      </div>
    </footer>
  );
};

const AboutSection = ({ logo }) => {
  const { language } = useLanguage();

  return (
    <div className={style.about}>
      <img
        src={logo}
        alt={translations[language].footer.title}
        className={style.logo}
      />
      <p className={style.description}>
        {translations[language].footer.description}
      </p>
    </div>
  );
};

const Sociallinks = ({ socialLinks }) => {
  const { language } = useLanguage();

  return (
    <div className={style.socialLinks}>
      <h3 className={style.socialLinksTitle}>
        {translations[language].footer.subTitle}
      </h3>
      <div className={style.socialIcon}>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} aria-label="Social media link">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

const MenuSection = ({ title, items }) => (
  <nav className={style.menu}>
    <h3 className={style.menuTitle}>{title}</h3>
    <ul className={style.menuList}>
      {items.map((item, index) => (
        <li key={index} className={style.menuItem}>
          <a href={item.url} className={style.menuLink}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const CopyrightNotice = () => {
  const { language } = useLanguage();

  return (
    <p className={style.copyright}>
      {translations[language].footer.copyright}{" "}
      <a href="/privacy-policy">{translations[language].footer.link}</a>
    </p>
  );
};

export default Footer;
