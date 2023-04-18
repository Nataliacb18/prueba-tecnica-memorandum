import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarApp } from "./components/NavbarApp";
import { Index } from "./components/Index";
import { FooterApp } from "./components/FooterApp";
import { SeriesView } from "./components/SeriesView";
import { MoviesView } from "./components/MoviesView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./data/sample.json";

import { Layout } from "./components/Layout";
import { Error } from "./components/Error";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/contextProvider";

function App() {
  const [state, setState] = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);


  useEffect(() => {
    if (data) {
      setState({ ...state, data });
      setIsLoading(false);
    } else {
      setLoadingError(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <NavbarApp />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index isLoading={isLoading} loadingError={loadingError}/>} />
          <Route path="series" element={<SeriesView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

      <FooterApp />
    </BrowserRouter>
  );
}

export default App;
