/* eslint-disable no-unused-vars */
import "./App.css";

// image
import detective from "./img/detective.jpg";
import EmphasisTech from "./components/sections/EmphasisTech";
import VerticalCardStack from "./components/sections/VerticalCardStack";
import CallToAction from "./components/sections/CallToAction";
import MediaActionCard from "./components/sections/MediaActionCard";
import { translations } from "./utils/translations";
import { useLanguage } from "./context/LanguageProvider";

function App() {
  const { language, updateLanguage } = useLanguage();

  return (
    <main>
      <div className="image-container">
        <img src={detective} alt="Detective" />
      </div>
      <div className="text-overlay">
        <h1>{translations[language].home.title}</h1>
        <hr />
        <p>{translations[language].home.explore}</p>
      </div>

      {/* Emphasis cards */}
      <EmphasisTech />

      {/* Vertical cards stack */}
      <VerticalCardStack />

      {/* call To Action */}
      <CallToAction />

      {/* Media Action Card */}
      <MediaActionCard />
    </main>
  );
}

export default App;
