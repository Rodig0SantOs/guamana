/* eslint-disable react/prop-types */
// Crie um novo componente TextFormatter.js
import style from "./textFormatter.module.css";

const TextFormatter = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g); // Divide o texto nos marcadores

  return (
    <p>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const content = part.slice(2, -2); // Remove os marcadores
          return (
            <span key={index} className={style.highlight}>
              {content}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
};

export default TextFormatter;
