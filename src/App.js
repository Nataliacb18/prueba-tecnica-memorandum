import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarApp } from "./components/NavbarApp";
import { Index } from "./components/Index";
import { FooterApp } from "./components/FooterApp";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { SeriesView } from "./components/SeriesView";
import { MoviesView } from "./components/MoviesView";
import data from "./data/sample.json";

function App() {
  const [page, setPage] = useState(0);
  const selectPages = (num) => {
    setPage(num);
  };
  return (
    <Container fluid>
      <NavbarApp />
      {page === 0 && <Index selectPages={selectPages}/>}
      {page === 1 && <SeriesView data={data}/>}
      {page === 2 && <MoviesView data={data}/>}

      <FooterApp />
    </Container>
  );
}

export default App;
