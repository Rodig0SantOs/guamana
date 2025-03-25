import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";

const TranslatedText = ({ textKey }) => {
  const { language } = useLanguage();

  // Verifica se a chave existe nas traduções
  if (!translations[language] || !translations[language][textKey]) {
    console.warn(`Texto não encontrado para a chave: ${textKey} no idioma: ${language}`);
    return textKey; // Retorna a própria chave como fallback
  }

  return <>{translations[language][textKey]}</>;
};

export default TranslatedText;
