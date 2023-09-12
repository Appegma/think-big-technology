import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import AppRouter from "./config/Routers";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AppRouter />
    </>
  );
};
export default App;
