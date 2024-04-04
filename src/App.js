import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbarcomponents/Navbar";
import { useLocation } from "react-router-dom";
import store from "./utils/store";

import { Provider } from "react-redux";
import BackDrop from "./components/navbarcomponents/backdrop/BackDrop";
import Footer from "./components/footercomponent/Footer";
import data from "./data.json";
import AppRoutes from "./AppRoutes";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
    useEffect(() => {
    setDrawerOpen(false);
  }, [location]);
  useLayoutEffect(()=> {
    document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
  }, [location.pathname])
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar onOpenClick={setDrawerOpen} data={data} />
        <AppRoutes/>
        <Footer />
        <BackDrop isOpen={isDrawerOpen} onClick={() => setDrawerOpen(false)} />
        <Navbar isMobile={true} isOpen={isDrawerOpen} data={data} />
      </Provider>
    </div>
  );
}

export default App;
