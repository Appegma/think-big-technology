import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../screens/Home";
import Projects from "../../screens/Projects";
import Services from "../../screens/Services";
import Contact from "../../screens/Contact";
import PageNotFound from "../../screens/PageNotFound";
import About from "../../screens/About";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
