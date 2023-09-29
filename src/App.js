import "./App.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import AppRouter from "./config/Routers";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setIsLoading(false);
    }, 5500);
  }, []);

  return isLoading ? <Loader /> : <AppRouter />;
};
export default App;
