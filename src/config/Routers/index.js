import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../screens/Home";
import Projects from "../../screens/Projects";
import Services from "../../screens/Services";
import Info from "../../screens/Info";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Info" element={<Info/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;