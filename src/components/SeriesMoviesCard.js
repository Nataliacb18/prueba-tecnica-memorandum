import React, { useRef, useState } from "react";
import "../styles/seriesMoviesCard.css";
import { Overlay, Popover } from "react-bootstrap";


export const SeriesMoviesCard = ({ elem }) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };



console.log(elem.images);
  return (
    <div ref={ref} onClick={handleClick} className="seriesMoviesCards">
      <img src={elem?.images["Poster Art"]?.url } alt="" />
    
      {elem?.title}
      <Overlay
      show={show}
      target={target}
      placement="bottom"
      container={ref}
      containerPadding={20}
    >
      <Popover id="popover-contained">
        <Popover.Header as="h3">{elem.title}</Popover.Header>
        <Popover.Body>
          <p>{elem.description}</p>
          <p>{elem.releaseYear}</p>
          <img src={elem?.images["Poster Art"]?.url} alt="" />
        </Popover.Body>
      </Popover>
    </Overlay>
    </div>

  );
};
