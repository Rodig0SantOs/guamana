// router.js
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import About from "./page/about/about";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./page/contact/contact";
/* import Blog from "./page/blog/Blog"; */
import Back from "./components/BackToTop/Back";
import { useEffect } from "react";
import { LanguageSwitcher } from "./components/languageSwitcher/languageSwitcher";
import Privacy from "./page/privacy/privacy";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null; // Adicionar esta linha
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Back />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
      <LanguageSwitcher />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
