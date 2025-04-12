import style from "./contact.module.css";
import contact from "../../img/contact-us.jpg";

import { sendEmail } from "../../utils/mailgridService";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
import ScrollAnimation from "../../components/scrollAnimationWrapper/ScrollAnimationWrapper";

const Contact = () => {
  const { language } = useLanguage();
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // No seu handleSubmitForm, atualize para:

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setMessageStatus(null);

    try {
      await sendEmail(formData);
      setMessageStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro detalhado no envio:", error);
      setMessageStatus("error");
    } finally {
      setIsSending(false);
      setTimeout(() => setMessageStatus(null), 5000);
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className={style.contact}>
      <div className={style.container}>
        <div className="image-container">
          <img src={contact} alt="Detective" />
        </div>
        <div className="text-overlay">
          <h1>{translations[language].contact.title}</h1>
          <hr />
          <p>{translations[language].contact.subtitle}</p>
        </div>

        {/* text about */}
        <ScrollAnimation className={style.contactText} id="contact">
          <div className={style.contactTitle}>
            <h2>{translations[language].contact.titlePage}</h2>
            <hr />
          </div>

          {/* form contact*/}
          <form onSubmit={handleSubmitForm} className={style.contactForm}>
            <label className={style.contactLabel}>
              {translations[language].contact.name}
              <input
                type="text"
                placeholder={translations[language].contact.namePlaceholder}
                required
                name="name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </label>

            <label className={style.contactLabel}>
              {translations[language].contact.email}
              <input
                type="email"
                placeholder={translations[language].contact.emailPlaceholder}
                required
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </label>

            <label className={style.contactLabel}>
              {translations[language].contact.phone}
              <input
                type="tel"
                placeholder={translations[language].contact.phonePlaceholder}
                required
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </label>

            <label className={style.contactLabel}>
              {translations[language].contact.subject}
              <input
                type="text"
                placeholder={translations[language].contact.subjectPlaceholder}
                required
                name="subject"
                value={formData.subject}
                onChange={(e) => {
                  setFormData({ ...formData, subject: e.target.value });
                }}
              />
            </label>

            <label className={style.contactLabel}>
              {translations[language].contact.message}
              <textarea
                placeholder={translations[language].contact.messagePlaceholder}
                required
                name="message"
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                }}
              />
            </label>

            <button
              type="submit"
              disabled={isSending}
              className={isSending ? style.disabledButton : ""}
            >
              {isSending
                ? translations[language].contact.sending
                : translations[language].contact.submit}
            </button>
            {messageStatus === "success" && (
              <div className={style.successMessage}>
                {translations[language].contact.successMessage}
              </div>
            )}

            {messageStatus === "error" && (
              <div className={style.errorMessage}>
                {translations[language].contact.errorMessage}
              </div>
            )}
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
